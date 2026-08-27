import styles from "@/app/style/modules/components/Badges.module.css";

const badgeList: Array<{ link: string; desc: string; imgURL: string }> = [
  {
    link: "https://userbyte.xyz/",
    desc: "userbyte.xyz",
    imgURL: "/img/88x31/userbyte.webp",
  },
  {
    link: "https://grainware.org/",
    desc: "grainware.org",
    imgURL: "https://electron271.gay/88x31/poweredbygrainware.avif",
  },
  {
    link: "https://accuratelinuxgraphs.com/",
    desc: "ACCURACY",
    imgURL: "/img/88x31/accuracy.avif",
  },
  {
    link: "https://electron271.gay/",
    desc: "electron271.gay",
    imgURL: "https://electron271.gay/88x31/badgev1.webp",
  },
  {
    link: "https://doclic.eu/",
    desc: "doclic.eu",
    imgURL: "/img/88x31/doclic.gif",
  },
  {
    link: "https://bontboss.com/",
    desc: "bontboss.com",
    imgURL: "https://bontboss.com/pictures/bontboss.png",
  },
  {
    link: "https://glocean.dev/",
    desc: "glocean.dev",
    imgURL: "/img/88x31/glocean.png",
  },
  {
    link: "https://www.youtube.com/watch?v=FtutLA63Cp8",
    desc: "of course someone put bad apple in an 88x31",
    imgURL: "/img/88x31/bad_apple.webp",
  },
];

export default function Badges() {
  return (
    <div className={styles.main}>
      {badgeList.map(
        (badge: { link: string; desc: string; imgURL: string }) => {
          return (
            <a
              key={badge.link}
              href={badge.link}
              target="_blank"
              title={badge.desc}
            >
              <img src={badge.imgURL} alt={badge.desc} width="88" height="31" />
            </a>
          );
        }
      )}
    </div>
  );
}
