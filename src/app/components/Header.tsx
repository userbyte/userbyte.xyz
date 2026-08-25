import NavBar from "./NavBar";
import styles from "@/app/style/modules/components/Header.module.css";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className="inner">
        <div className="header_text">
          <a href="/">
            <span>u</span>
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>b</span>
            <span>y</span>
            <span>t</span>
            <span>e</span>
            <span>.</span>
            <span>x</span>
            <span>y</span>
            <span>z</span>
          </a>
        </div>
        <NavBar />
      </div>
    </div>
  );
}
