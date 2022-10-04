import Link from "next/link";
import styles from "../../styles/ButtonGroup.module.css";

export default function GreenButton({ greenBtn, isDestinationPage }) {
  return (
    
      isDestinationPage ? (
        <a href={greenBtn.link} className={`rounded-pill shadow w-50 nav-link ${styles.btn_grad}`} target="_blank" rel="noreferrer">
          {greenBtn.linkCaption}
        </a>
      ) : (
        <Link href={greenBtn.link}>
          <a className={`rounded-pill shadow w-50 nav-link ${styles.btn_grad}`}>
            {greenBtn.linkCaption}
          </a>
        </Link>
      )
    
  );
}
