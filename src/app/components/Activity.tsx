"use client";

import { Types, useLanyard } from "use-lanyard";
import DiscordActivity from "./DiscordActivity";
import SpotifyActivity from "./SpotifyActivity";

export const DISCORD_USER_ID = "143183268571774976";

// ripped from https://github.com/cnrad/lanyard-profile-readme and modified for my usecase
// shoutout cnrad
export function fetchUserImages(data: Types.Presence | "loading") {
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

export default function Activity() {
  try {
    const presence = useLanyard(DISCORD_USER_ID, {});

    if (presence) {
      return (
        <section>
          <DiscordActivity presence={presence} />
          <SpotifyActivity presence={presence} />
        </section>
      );
    } else {
      // waiting for data
      return (
        <section>
          <DiscordActivity presence={"loading"} />
          <SpotifyActivity presence={"loading"} />
        </section>
      );
    }
  } catch (err) {
    return <p>error getting data</p>;
  }
}
