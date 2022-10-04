import styles from "../../styles/Parallax.module.css";
import Image from "next/image";

export default function ParallaxContentsV2({ preHeader, header, link, bg }) {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center">
        <div
          className={`${styles.content_container2} d-flex flex-column justify-content-center align-items-center rounded-4`}
        >
          <h1
            className="fw-bolder mt-3 text-center text-dark"
          >
            {header}
          </h1>
          <a href={link} className="nav-link mt-4 text-dark text-center">
            Book now &gt;
          </a>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "450px",
          width: "100%",
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
          }}
        >
          <Image
            src={bg}
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            alt="RedCarBackground"
          />
        </div>
      </div>
    </div>
  );
}
