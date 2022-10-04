import boatThailand from "../../public/boatThailand.jpg";
import nightThailand from "../../public/nightThailand.jpg";
import temple from "../../public/temple3.jpg";
import temple2 from "../../public/temple2.jpg";
import ImageGalley2 from "../utility-components/ImageGalley2";

import { FaComments, FaHome, FaCarAlt, FaBus, FaUmbrella } from 'react-icons/fa';
import GreenButton from "../utility-components/GreenButton";

export default function Pattaya() {
  
  const galleryPhotos = {
    imageOne: boatThailand,
    imageTwo: temple,
    imageThree: nightThailand,
    imageFour: temple2,
  };

  return (
    <div className="container py-5 px-4" id="Pattaya">
      <div className="row py-5">
        <div className="col-12 col-lg-6 pb-5 d-flex justify-content-start justify-content-lg-center align-items-center">
            <div>
                <h1 className="fw-bolder">Experience Bangkok and Pattaya</h1>
                <p className="fw-light text-muted mt-2">5 Days and 4 Nights</p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <FaComments className="fs-4 me-3" style={{color:'#355985'}} /> 2 nights stay in Sunbeam Pattaya </p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <FaHome className="fs-4 me-3" style={{color:'#355985'}} /> 2 night stay in Ambassador Hotel Bangkok</p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <FaCarAlt className="fs-4 me-3" style={{color:'#355985'}} /> Transportation to hotel and airport</p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <FaBus className="fs-4 me-3" style={{color:'#355985'}} /> Bangkok City Tour</p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 pb-2"> <FaUmbrella className="fs-4 me-3" style={{color:'#355985'}} /> Coral Island + Lunch</p>
                <GreenButton greenBtn={{linkCaption:"Get Started", link:"https://www.history.com/topics/ancient-greece/ephesus"}}/>
            </div>
        </div>
        <div className="col-12 col-lg-6">
          <ImageGalley2 images={galleryPhotos} />
        </div>
      </div>
    </div>
  );
}
