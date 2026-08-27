import { GitHubRepo } from "./models/github";

const GITHUB_API_URL = "https://api.github.com/";

export async function getRepos(username: string): Promise<{
  status: "SUCCESS" | "FAILED";
  repos?: Array<GitHubRepo>;
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
    res = await fetch(GITHUB_API_URL + "users/" + username + "/repos", {
      method: "GET",
    });
  } catch (err) {
    res = null;
    console.error(`[githubclient] Error trying to get repos: ${err}`);
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
        repos: res_json,
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
          `[githubclient] Encountered an unknown error while getting posts: ${res_json.error}`
        );
        return { status: "FAILED", error: "UNKNOWN" };
      }
      return { status: "FAILED", error: "UNKNOWN" };
  }
}
