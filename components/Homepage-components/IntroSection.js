import styles from "../../styles/Intro.module.css";
import Image from "next/image";
import bg from "../../public/bg.png";
import {IntroContent} from "../../utilities/VideoContentData"
import VideoSection from "../utility-components/VideoSection";

export default function IntroSection() {
  return (
    <div>
      <div className="position-relative d-flex justify-content-center">
        <div className={styles.bgText}>
          <VideoSection contents={IntroContent} />
        </div>
      </div> 
      <div className={styles.bgWrap}>
        <Image
          src={bg}
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
