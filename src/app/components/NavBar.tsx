import Link from "next/link";
import styles from "@/app/style/modules/components/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.main}>
      <div className="nav_button" data-specialstyle="home">
        <Link href="/">[ home ]</Link>
      </div>

      <div className="nav_button" data-specialstyle="about">
        <Link href="/blog">[ blog ]</Link>
      </div>
      <div className="nav_button" data-specialstyle="about">
        <Link href="/guestbook">[ guestbook ]</Link>
      </div>
    </div>
  );
}
