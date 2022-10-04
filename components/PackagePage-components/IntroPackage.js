import Image from "next/image";
import bg from "../../public/maldives.jpg";

export default function IntroPackage() {
  const styles = {
    bgWrap: {
      position: "relative",
      height: "24em",
      width: "100vw",
      overflow: "hidden",
      zIndex: 1,
    },

    bgText: {
      /* position: relative; */
      position: "absolute",
      zIndex: 1000,
      color: "white",
    },
  };
 
  return (
    <div>
      <div className="position-relative d-flex justify-content-center">
        <div className="mt-5 pt-4 pt-md-5" style={styles.bgText}>
          <h1 className="text-light fw-bolder text-center pt-5" style={{fontSize:"60px"}}>Budget Excursion</h1>
          <p className="text-light text-center">Your One Stop Travel Solutions</p>
        </div>
      </div>
      <div style={styles.bgWrap}>
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
