"use client";
import { Types, useLanyard } from "use-lanyard";
import DiscordActivity from "./DiscordActivity";
import SpotifyActivity from "./SpotifyActivity";
import { DISCORD_USER_ID } from "./LanyardWrapper";

export default function LanyardClient({
  initialData,
}: {
  initialData: Types.Presence;
}) {
  try {
    const presence = useLanyard(DISCORD_USER_ID, {
      initialData: initialData,
    });

    if (presence) {
      return (
        <>
          <DiscordActivity presence={presence} />
          <SpotifyActivity presence={presence} />
        </>
      );
    } else {
      // waiting for data
      return (
        <>
          <DiscordActivity presence={"loading"} />
          <SpotifyActivity presence={"loading"} />
        </>
      );
    }
  } catch (err) {
    return <p>error getting data</p>;
  }
}
