import styles from '../../styles/RafsanTC.module.css'
import Youtube from "../utility-components/Youtube";

export default function RafsanTC() {
  return (
    <div className={`${styles.RafsanTC_container}`} style={{background:'#EFF3FC'}} >
      <div className="container p-5">
        <h1 className="fw-bolder text-center">Discover new places and cultures!</h1>
        <p className="fw-light text-muted text-center">Let Rafsan The ChotoBhai Take You on a Tour of Turkey</p>
        <div className="row py-3 py-md-5 ">
          <div className="col d-flex justify-content-center align-items-center">
            <div className={`${styles.video_container}`}>
              <Youtube embedId={"5Hw7BkLDllk"} />
            </div>
          </div>
          <div className="col mt-3 mt-md-0 d-flex justify-content-center align-items-center">
            <div className={`${styles.video_container}`}>
              <Youtube embedId={"yfIGpB0Olgo"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
