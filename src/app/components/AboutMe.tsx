import Socials from "./Socials";
import styles from "@/app/style/modules/components/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.main}>
      <picture>
        <source srcSet="/img/webp/userbyte.webp" />
        <img className="pfp" src="/img/png/userbyte.png" />
      </picture>
      <p>
        welcome to <b>userbyte.xyz</b>:
        <i> a personal website exhibiting all that is "userbyte"</i>
      </p>
      <p>...</p>
      <p>
        im a shitty programmer with boring projects. not much to see here tbh.
        "UsErByTe" lol nerd ass 🤓
      </p>
    </div>
  );
}
