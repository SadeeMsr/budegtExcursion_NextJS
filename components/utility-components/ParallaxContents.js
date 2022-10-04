import styles from '../../styles/Parallax.module.css'
import Image from "next/image";
import Link from 'next/link';

export default function ParallaxContents({preHeader, header, link, bg}) {
 
  return (
    <div>
      <div className={`${styles.content_container} d-flex flex-column justify-content-center align-items-center`}>
        <h5 className="fw-bolder text-center">{preHeader}</h5>
        <h1 className="fw-bolder mt-3 text-center" style={{fontSize:'50px'}}>{header}</h1>
        <Link href={link}><a  className="nav-link text-light mt-5 text-center">Learn more &gt;</a></Link>
      </div>
      <div
        style={{
          position: "relative",
          height: "570px",
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
