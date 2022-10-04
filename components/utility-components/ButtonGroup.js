import Link from "next/link";
import styles from "../../styles/ButtonGroup.module.css";

export default function ButtonGroup({ greenBtn, whiteBtn }) {
  return (
    <div
      className={`mt-5 d-flex flex-md-row flex-column justify-content-center align-items-center`}
    >
      
        <Link href={greenBtn.link}>
          <a className={`rounded-pill shadow nav-link ${styles.btn_grad}`}>{greenBtn.linkCaption}</a>
        </Link>
     
      
        <Link href={whiteBtn.link}>
          <a className={`btn btn-light nav-link shadow rounded-pill ms-0 ms-md-3 px-md-5 px-4 py-3`}>{whiteBtn.linkCaption}</a>
        </Link>
     
    </div>
  );
}
