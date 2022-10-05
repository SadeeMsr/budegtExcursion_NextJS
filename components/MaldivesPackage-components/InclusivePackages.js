import Image from "next/image";
import image1 from "../../public/girlInMaldive.jpg";
import { BiSwim } from 'react-icons/bi';
import { GiPalmTree, GiSharkFin, GiFlatfish, GiMeat } from 'react-icons/gi';


export default function InclusivePackages() {
  return (
    <div className="container py-5 px-4">
      <div className="row py-5">
        <div className="col-12 col-lg-6 pb-5 d-flex justify-content-start justify-content-lg-center align-items-center">
            <div>
                <h1 className="fw-bolder">All Inclusive Package</h1>
                <p className="fw-light text-muted mt-2 pe-md-3">Our package for Kaani Grand includes various activities besides the obviously included Speed Boat Transfer and Breakfast to keep you entertained all throughout the trip. You will find more details by scrolling below </p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <BiSwim className="fs-4 me-3" style={{color:'#355985'}} /> Snorkeling in 3 different Reefs </p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <GiPalmTree className="fs-4 me-3" style={{color:'#355985'}} /> Full Day Excursion through 3 different islands on speed boat</p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <GiSharkFin className="fs-4 me-3" style={{color:'#355985'}} /> Dolphin Watching</p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 "> <GiFlatfish className="fs-4 me-3" style={{color:'#355985'}} /> Maldiian Style Fishing (prepare fish for dinner) </p>
                <p className="fw-light text-muted d-flex align-items-center mt-4 pb-2"> <GiMeat className="fs-4 me-3" style={{color:'#355985'}} /> Beachside Buffet Dinner for the entirety of your trip</p>
            </div>
        </div>
        <div className="col-12 col-lg-6">
        <div className="rounded-4 overflow-hidden w-100 shadow">
              <Image
                src={image1}
                layout="responsive"
                objectFit="cover"
                alt="..."
                priority
              />
            </div>
        </div>
      </div>
    </div>
  )
}
