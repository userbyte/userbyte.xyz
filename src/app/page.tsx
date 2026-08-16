import type { Metadata } from "next";
import Badges from "./components/Badges";
import AboutMe from "./components/AboutMe";
import Activity from "./components/Activity";
import Socials from "./components/Socials";
import styles from "@/app/style/modules/pages/Home.module.css";

export const metadata: Metadata = {
  title: "userbyte.xyz",
  description: "home of all things userbyte",
};

export default function Homepage() {
  return (
    <div className={styles.main}>
      <div className="container">
        <AboutMe />
        <Activity />
        <Socials />
      </div>
      <Badges />
    </div>
  );
}
