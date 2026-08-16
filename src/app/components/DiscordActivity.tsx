import { Types } from "use-lanyard";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "./Socials";
import { DISCORD_USER_ID, fetchUserImages } from "./Activity";
import styles from "@/app/style/modules/components/DiscordActivity.module.css";

export default function DiscordActivity({
  presence,
}: {
  presence: Types.Presence | "loading" | null | undefined;
}) {
  if (!presence) return <p>:(</p>;

  // check if presence data is loading
  if (presence === "loading") {
    return (
      <div className={styles.main}>
        <span className="title">
          <FontAwesomeIcon icon={faDiscord} />
          <p>discord activity</p>
        </span>
        <p>loading...</p>
      </div>
    );
  }

  // parse data
  const displayName = presence.discord_user.global_name
    ? presence.discord_user.global_name
    : presence.discord_user.username;
  const username = presence.discord_user.username;
  const status = presence.discord_status;
  const pfpURL = presence.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/${presence.discord_user.avatar}`
    : "/img/png/unknown.png";

  // carve out and format image URLs
  const imgs = fetchUserImages(presence);
  // get last activity item, it's usually the relevant one
  const latestActivity = presence.activities[presence.activities.length - 1];

  var activityMapped;
  if (latestActivity) {
    activityMapped = {
      name: latestActivity.name ? latestActivity.name : "...",
      state: latestActivity.state ? latestActivity.state : "...",
      details: latestActivity.details ? latestActivity.details : "...",
      largeImage: imgs.assetLargeImage
        ? imgs.assetLargeImage
        : "/img/png/unknown.png",
      largeText: latestActivity.assets
        ? latestActivity.assets.large_text
        : undefined,
      smallImage: imgs.assetSmallImage
        ? imgs.assetSmallImage
        : "/img/png/unknown.png",
      smallText: latestActivity.assets
        ? latestActivity.assets.small_text
        : undefined,
    };
  }

  return (
    <div className={styles.main}>
      <span className="title">
        <FontAwesomeIcon icon={faDiscord} />
        <p>discord activity</p>
      </span>
      <span>
        <picture>
          <img className="pfp" srcSet={pfpURL} data-status={status} />
        </picture>
        <p className="display_name">
          <a href={socialLinks.discord} target="_blank">
            {displayName}
          </a>
        </p>
        <p className="username">
          <a href={socialLinks.discord} target="_blank">
            @{username}
          </a>
        </p>
      </span>
      {activityMapped ? (
        <span className="activity_details">
          <section>
            <picture>
              <img
                className="activity_lg_img"
                srcSet={activityMapped.largeImage}
                title={activityMapped.smallText}
              />
            </picture>
            <picture>
              <img
                className="activity_sm_img"
                srcSet={activityMapped.smallImage}
                title={activityMapped.smallText}
              />
            </picture>
          </section>
          <div>
            <p title={activityMapped.state}>{activityMapped.state}</p>
            <p title={activityMapped.details}>{activityMapped.details}</p>
          </div>
        </span>
      ) : (
        <p>{status}</p>
      )}
    </div>
  );
}
