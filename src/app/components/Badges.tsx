import styles from "@/app/style/modules/components/Badges.module.css";

const badgeList: Array<{ link: string; desc: string; imgURL: string }> = [
  {
    link: "https://userbyte.xyz/",
    desc: "userbyte.xyz",
    imgURL: "/img/webp/88x31.webp",
  },
  {
    link: "https://electron271.gay/",
    desc: "electron271.gay",
    imgURL: "https://electron271.gay/88x31/badgev1.webp",
  },
  {
    link: "https://grainware.org/",
    desc: "grainware.org",
    imgURL: "https://electron271.gay/88x31/poweredbygrainware.avif",
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
