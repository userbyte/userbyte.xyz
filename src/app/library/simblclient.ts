import { Post } from "./models/simbl";

const SIMBL_API_URL = "https://simbl.userbyte.xyz/api/";

export async function getPosts(): Promise<{
  status: "SUCCESS" | "FAILED";
  posts?: Array<Post>;
  error?:
    | "NO_TOKEN"
    | "UNAUTHORIZED"
    | "NOT_PERMITTED"
    | "NOT_FOUND"
    | "SERVER_ERR"
    | "NETWORK_ERR"
    | "UNKNOWN";
}> {
  // send request
  let res: Response | null;
  try {
    res = await fetch(SIMBL_API_URL + "post", {
      method: "GET",
    });
  } catch (err) {
    res = null;
    console.error(`[simblclient] Error trying to get posts: ${err}`);
  }
  if (!res) return { status: "FAILED", error: "NETWORK_ERR" };

  // process JSON data (hopefully it exists)
  let res_json;
  try {
    res_json = await res.json();
  } catch {
    res_json = {};
  }

  // handle status codes
  switch (res.status) {
    case 200:
      return {
        status: "SUCCESS",
        posts: res_json.posts,
      };

    case 401:
      return { status: "FAILED", error: "UNAUTHORIZED" };

    case 404:
      return { status: "FAILED", error: "NOT_FOUND" };

    case 500:
      return { status: "FAILED", error: "SERVER_ERR" };

    default:
      if (res_json.error != undefined) {
        console.error(
          `[simblclient] Encountered an unknown error while getting posts: ${res_json.error}`
        );
        return { status: "FAILED", error: "UNKNOWN" };
      }
      return { status: "FAILED", error: "UNKNOWN" };
  }
}
