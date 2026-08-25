import {
  faDiscord,
  faGithub,
  faSteam,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/app/style/modules/components/Socials.module.css";

export const socialLinks = {
  github: "https://github.com/userbyte",
  steam: "https://steamcommunity.com/id/usbt0",
  twitter: "https://twitter.com/userbyte",
  youtube: "https://www.youtube.com/@userbyte",
  reddit: "https://reddit.com/u/userbyte",
  instagram: "https://instagram.com/userbyte0",
  discord: "https://discord.com/users/143183268571774976",
  email: "contact(at)userbyte.xyz",
};

export default function Socials() {
  return (
    <div className={styles.main}>
      <h3>socials:</h3>
      <a href={socialLinks.github} target="_blank">
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <p>userbyte</p>
        </span>
      </a>
      <a href={socialLinks.steam} target="_blank">
        <span>
          <FontAwesomeIcon icon={faSteam} />
          <p>userbyte</p>
        </span>
      </a>
      <a href={socialLinks.twitter} target="_blank">
        <span>
          <FontAwesomeIcon icon={faXTwitter} />
          <p>userbyte</p>
        </span>
      </a>
      <a href={socialLinks.youtube} target="_blank">
        <span>
          <FontAwesomeIcon icon={faYoutube} />
          <p>userbyte</p>
        </span>
      </a>
      <a href={socialLinks.discord} target="_blank">
        <span>
          <FontAwesomeIcon icon={faDiscord} />
          <p>userbyte</p>
        </span>
      </a>
    </div>
  );
}
