import styles from "../../styles/PerfectHoliday.module.css";
import Image from "next/image";
import bookBg from "../../public/bookBg.jpg";

export default function PerfectHoliday() {
  return (
    <div>
      <div className="position-relative d-flex justify-content-center">
        <div className={styles.bgText}>
          <h1 className="fw-bold text-center text-light">
            Choose your perfect holiday
          </h1>
          <p className="text-center text-light">
            Check out what our client has to say about us!
          </p>
        </div>
      </div>
      <div className={styles.bgWrap}>
        <Image
          src={bookBg}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="..."
          priority
        />
      </div>
    </div>
  );
}
