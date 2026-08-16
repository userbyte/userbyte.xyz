"use client";
import { Types, useLanyard } from "use-lanyard";
import { faDiscord, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "./Socials";
import discordStyles from "@/app/style/modules/components/DiscordActivity.module.css";
import spotifyStyles from "@/app/style/modules/components/SpotifyNowPlaying.module.css";
import { useEffect, useState } from "react";

const DISCORD_USER_ID = "143183268571774976";

// ripped from https://github.com/cnrad/lanyard-profile-readme and modified for my usecase
// shoutout cnrad
function fetchUserImages(data: Types.Presence | "loading") {
  let avatar: string;
  let avatarDecoration: string | null = null;
  let clanBadge: string | null = null;
  let assetLargeImage: string | null = null;
  let assetSmallImage: string | null = null;
  let userEmoji: string | null = null;
  let albumCover: string | null = null;

  if (!data || data === "loading")
    return {
      avatar: null,
      clanBadge,
      avatarDecoration,
      assetLargeImage,
      assetSmallImage,
      userEmoji,
      albumCover,
    };

  const avatarExtension =
    data.discord_user.avatar &&
    data.discord_user.avatar.startsWith("a_") &&
    "webp";

  const statusExtension: string = "webp";

  const userStatus: Types.Activity | undefined =
    data.activities[0] && data.activities[0].type === 4
      ? data.activities[0]
      : undefined;

  const activities = data.activities
    // Filter only type 0
    .filter((activity) => activity.type === 0);
  const activity: Types.Activity | undefined =
    activities.length > 0 ? activities[0] : undefined;

  if (data.discord_user.avatar) {
    avatar = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${
      data.discord_user.avatar
    }.${avatarExtension}?size=${"256"}`;
  } else {
    avatar = `https://cdn.discordapp.com/embed/avatars/${
      data.discord_user.discriminator === "0"
        ? Number(BigInt(data.discord_user.id) >> BigInt(22)) % 6
        : Number(data.discord_user.discriminator) % 5
    }.png?size=${128}`;
  }

  if (
    data.discord_user.primary_guild &&
    data.discord_user.primary_guild.identity_guild_id &&
    data.discord_user.primary_guild.badge
  ) {
    clanBadge = `https://cdn.discordapp.com/clan-badges/${data.discord_user.primary_guild.identity_guild_id}/${data.discord_user.primary_guild.badge}.png?size=32`;
  }

  if (data.discord_user.avatar_decoration_data?.asset) {
    `https://cdn.discordapp.com/avatar-decoration-presets/${data.discord_user.avatar_decoration_data.asset}.png?size=64&passthrough=true`;
  }

  if (activity?.assets?.large_image)
    assetLargeImage = activity.assets?.large_image.startsWith("mp:external/")
      ? `${activity.assets.large_image.replace(
          /mp:external\/([^\/]*)\/(http[s])/g,
          "$2:/"
        )}`
      : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`;

  if (activity?.assets?.small_image)
    assetSmallImage = activity.assets.small_image.startsWith("mp:external/")
      ? `${activity.assets.small_image.replace(
          /mp:external\/([^\/]*)\/(http[s])/g,
          "$2:/"
        )}`
      : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.webp`;

  if (userStatus?.emoji?.id)
    userEmoji = `https://cdn.discordapp.com/emojis/${userStatus.emoji.id}.${statusExtension}?size=32`;

  if (data.spotify?.album_art_url) albumCover = data.spotify.album_art_url;

  // Fetch album art from non-Spotify listening activity (e.g. Apple Music via discord-music-presence)
  if (!albumCover) {
    const musicActivity = data.activities.find(
      (a) => a.type === 2 && !data.listening_to_spotify
    );
    if (musicActivity?.assets?.large_image)
      albumCover = musicActivity.assets.large_image.startsWith("mp:external/")
        ? `${musicActivity.assets.large_image.replace(
            /mp:external\/([^\/]*)\/(http[s])/g,
            "$2:/"
          )}`
        : `https://cdn.discordapp.com/app-assets/${musicActivity.application_id}/${musicActivity.assets.large_image}.webp`;
  }

  return {
    avatar,
    clanBadge,
    avatarDecoration,
    assetLargeImage,
    assetSmallImage,
    userEmoji,
    albumCover,
  };
}

function DiscordActivity({
  presence,
}: {
  presence: Types.Presence | "loading" | null | undefined;
}) {
  if (!presence) return <p>:(</p>;

  // check if presence data is loading
  if (presence === "loading") {
    return (
      <div className={discordStyles.main}>
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
    <div className={discordStyles.main}>
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

function SpotifyNowPlaying({
  presence,
}: {
  presence: Types.Presence | "loading" | null | undefined;
}) {
  if (!presence) return <p>not listening to anything</p>;

  const [songProgress, setSongProgress] = useState<number>(0);

  // parse data
  const imgs = fetchUserImages(presence);
  var musicActivityMapped: {
    albumArt: string;
    artist: string;
    title: string;
    album: string;
    trackID: string;
    timestamps: { start: number; end: number };
  } | null = null;
  if (presence != "loading" && presence.spotify) {
    musicActivityMapped = {
      albumArt: imgs.albumCover
        ? `${imgs.albumCover}`
        : "/img/png/unknown-music.png",
      artist: presence.spotify?.artist
        ? presence.spotify.artist
        : "[artist unknown]",
      title: presence.spotify ? presence.spotify.song : "[song unknown]",
      album: presence.spotify?.album
        ? presence.spotify.album
        : "[album unknown]",
      trackID: presence.spotify?.track_id
        ? presence.spotify.track_id
        : "43oMQcGFOR5z4Nwg8YPL2J", // song called missing data, lol
      timestamps: presence.spotify
        ? presence.spotify.timestamps
        : { start: 0, end: 0 },
    };
  }

  useEffect(() => {
    // update spotify progress every 250ms
    if (musicActivityMapped) {
      const loop = setInterval(() => {
        if (musicActivityMapped) {
          const ct =
            ((new Date().getTime() - musicActivityMapped.timestamps.start) /
              (musicActivityMapped.timestamps.end -
                musicActivityMapped.timestamps.start)) *
            100;
          setSongProgress(ct);
        }
      }, 250);

      // clean up on unmount
      return () => clearInterval(loop);
    }
  }, [musicActivityMapped]);

  // check if presence data is loading
  if (presence === "loading") {
    return (
      <div className={spotifyStyles.main}>
        <span className="title">
          <FontAwesomeIcon icon={faSpotify} />
          <p>spotify activity</p>
        </span>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className={spotifyStyles.main}>
      <span className="title">
        <FontAwesomeIcon icon={faSpotify} />
        <p>spotify activity</p>
      </span>
      {musicActivityMapped ? (
        <>
          <span>
            <picture>
              <img
                className="album_art"
                srcSet={musicActivityMapped.albumArt}
                title={musicActivityMapped.album}
              />
            </picture>
            <div>
              <p>{musicActivityMapped.artist}</p>
              <p>{musicActivityMapped.title}</p>
              <p>{musicActivityMapped.album}</p>
            </div>
          </span>
          <div className="progress_bar_outer">
            <div
              className="progress_bar_inner"
              style={{ width: `${songProgress}%` }}
            ></div>
          </div>
        </>
      ) : (
        <p>not listening to anything</p>
      )}
    </div>
  );
}

export default function Activity() {
  try {
    const presence = useLanyard(DISCORD_USER_ID, {});

    if (presence) {
      return (
        <section>
          <DiscordActivity presence={presence} />
          <SpotifyNowPlaying presence={presence} />
        </section>
      );
    } else {
      // waiting for data
      return (
        <section>
          <DiscordActivity presence={"loading"} />
          <SpotifyNowPlaying presence={"loading"} />
        </section>
      );
    }
  } catch (err) {
    return <p>error getting data</p>;
  }
}
