import Link from "next/link";
import styles from "../../styles/ButtonGroup.module.css";

export default function GreenButton({greenBtn}) {
  return (
    <Link href={greenBtn.link}>
      <a className={`rounded-pill shadow w-50 nav-link ${styles.btn_grad}`}>
        {greenBtn.linkCaption}
      </a>
    </Link>
  );
}
