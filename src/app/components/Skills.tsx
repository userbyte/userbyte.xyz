import {
  faGolang,
  faPython,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/app/style/modules/components/Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.main}>
      <p>proficient languages:</p>
      <div className="lang_list">
        <div className="lang_item" data-lang="golang">
          <FontAwesomeIcon icon={faGolang} />
          <p>Go</p>
        </div>
        <div className="lang_item" data-lang="javascript">
          <FontAwesomeIcon icon={faTypescript} /> <p>JS/TS</p>
        </div>
        <div className="lang_item" data-lang="python">
          <FontAwesomeIcon icon={faPython} /> <p>Python</p>
        </div>
      </div>
    </div>
  );
}
