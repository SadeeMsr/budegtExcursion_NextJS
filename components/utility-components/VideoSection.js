import styles from "../../styles/VideoSection.module.css";
import Youtube from "./Youtube";

export default function VideoSection({contents}) {
  return (
    <div
    className={`text-center p-5 d-flex flex-column justify-content-center align-items-center`}
    style={{backgroundColor: contents.backgroundColor}}
  >
    <div className="mt-md-5 pb-5">
      <h1 className="fw-bold">{contents.heading}</h1>
      {contents.subHeading? <p className="fw-light text-muted">{contents.subHeading}</p>:''}
    </div>
    <div className={`${contents.subHeading? "mt-3":''} mt-3 ${styles.video_container}`}>
      <Youtube embedId={contents.videoID} />
    </div>
  </div>
  )
}
