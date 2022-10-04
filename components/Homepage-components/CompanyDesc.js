import Image from "next/image";
import globe from "../../public/globe_prev_ui.png";

export default function CompanyDesc() {
  return (
    <div className={`mt-md-5 pt-md-5 pb-5 container`}>
      <div className="row">
        <div className="col-lg-6 col-12 d-flex justify-content-center ">
          <div className="px-5 d-flex flex-column justify-content-between h-75">
            <h1 className="fw-bold" style={{color:'#355985', fontSize:'48px'}}>Budget Excursions</h1>
            <p className="text-muted fw-light">
              Budget Excursions is a full-service travel agency specialized in
              group, family and solo travel. Budget Excursions has worked hard
              to establish and maintain a beautiful harmony between travel
              industry partners and their clients. When you let Budget
              Excursions plan your travel experience, you get the assurance of
              our solid team of knowledgeable and committed travel experts. No
              more guesswork, stress, and unnecessary risk with your time and
              money.{" "}
            </p>
            <p>Syed Wasiful Haq</p>
          </div>
        </div>

        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
          <div className="mt-lg-0 mt-5 text-center d-flex flex-column justify-content-center align-items-center">
            <h4 className="fw-bold ">Expand your horizons</h4>
            <p>The Earth waits for you </p>
            <div style={{width: '350px', height: '350px'}}>
              <Image src={globe}  alt="globe" layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
