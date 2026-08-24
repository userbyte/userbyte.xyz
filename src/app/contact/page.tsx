import type { Metadata } from "next";
import Contact from "../components/Contact";
import styles from "@/app/style/modules/pages/Contact.module.css";

export const metadata: Metadata = {
  title: "contact - userbyte.xyz",
  description: "home of all things userbyte",
};

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <div className="container">
        <Contact />
      </div>
    </div>
  );
}
