import { useEffect, useState } from "react";
import { Types } from "use-lanyard";
import { fetchUserImages } from "./Activity";
import styles from "@/app/style/modules/components/SpotifyActivity.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function SpotifyActivity({
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
      <div className={styles.main}>
        <span className="title">
          <FontAwesomeIcon icon={faSpotify} />
          <p>spotify activity</p>
        </span>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <span className="title">
        <FontAwesomeIcon icon={faSpotify} />
        <p>spotify activity</p>
      </span>
      {musicActivityMapped ? (
        <>
          <span>
            <a
              href={`https://open.spotify.com/track/${musicActivityMapped.trackID}`}
            >
              <picture>
                <img
                  className="album_art"
                  srcSet={musicActivityMapped.albumArt}
                  title={musicActivityMapped.album}
                />
              </picture>
            </a>
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
