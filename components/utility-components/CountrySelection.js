import styles from "../../styles/SelectCountry.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CountrySelection({country, desc, bg, link}) {
  const style1 = {
    bgWrap: {
      position: "relative",
      height: "100%",
      width: "100%",
      overflow: "hidden",
      zIndex: 1,
      opacity: 0.68
    },

    bgText: {
      /* position: relative; */
      position: "absolute",
      zIndex: 1000,
      color: "white",
      textShadow: "2px 2px 10px #000000"
    },
  };

  return (
    <div className={`${styles.option_container}`}>
      <div className="position-relative d-flex justify-content-center">
        <div
          className="mt-4 px-3"
          style={style1.bgText}
        >
          <h1
            className=" fw-bolder text-center pt-5"
            style={{ fontSize: "28px"}}
          >
            {country}
          </h1>
          <p className=" text-center">
            {desc}
          </p>
          <Link  href={link}><a className="mt-5 text-light fw-bolder nav-link d-flex justify-content-center">Learn More &gt;</a></Link>
        </div>
      </div>
      <div className="" style={style1.bgWrap}>
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
