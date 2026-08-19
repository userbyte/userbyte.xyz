import styles from "@/app/style/modules/components/Simbl.module.css";
import { getPosts } from "../library/simblclient";
import { Post } from "../library/models/simbl";
import { prettifyUnixTime } from "../library/shared";

var latestSimblPost: Post | null = null;
const simblPostsResult = await getPosts();

// check if the posts response was successful, and if there were any posts returned
if (simblPostsResult.status === "SUCCESS" && simblPostsResult.posts) {
  if (simblPostsResult.posts.length > 1)
    latestSimblPost = simblPostsResult.posts[simblPostsResult.posts.length - 1];
}

export default function Simbl() {
  return (
    <>
      {latestSimblPost ? (
        <>
          <div className={styles.main}>
            <span className="title">
              <picture>
                <img srcSet="https://simbl.userbyte.xyz/img/svg/logo.svg"></img>
              </picture>
              <p>latest simbl post</p>
            </span>
            <a
              href={`https://simbl.userbyte.xyz/post/${latestSimblPost.id}`}
              target="_blank"
            >
              <p className="post_text" title={latestSimblPost.text}>
                {latestSimblPost.text}
              </p>
              <span className="author_date">
                <p>- {latestSimblPost.author}</p>
                <p>{`(${prettifyUnixTime(
                  latestSimblPost.timestamp,
                  "%g %d, %Y"
                )})`}</p>
              </span>
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
