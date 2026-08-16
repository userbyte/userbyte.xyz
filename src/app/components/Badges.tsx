import styles from "@/app/style/modules/components/Badges.module.css";

export default function Badges() {
  return (
    <div className={styles.main}>
      <a href="https://userbyte.xyz/" target="_blank">
        <img
          src="/img/webp/88x31.webp"
          alt="userbyte.xyz"
          width="88"
          height="31"
        />
      </a>
      <a href="https://electron271.gay/" target="_blank">
        <img
          src="https://electron271.gay/88x31/badgev1.webp"
          alt="electron271.gay"
          width="88"
          height="31"
        />
      </a>
    </div>
  );
}
