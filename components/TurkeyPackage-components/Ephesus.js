import Image from "next/image";
import image1 from "../../public/ancientStage.jpg";
import GreenButton from "../utility-components/GreenButton";

export default function Ephesus() {
  return (
    <div id="Ephesus">
      <div className="container">
        <div className="row py-5">
          <div
            className="col-12 col-lg-6 d-flex justify-content-center align-items-center"
            style={{ minHeight: "500px" }}
          >
            <div>
              <h1 className="fw-bolder">Ephesus</h1>
              <p className="text-muted pe-lg-5">
                Ephesus is one of the best-preserved ancient sites in the world
                showcasing the Temple of Artemis, Curetes street, famous Roman
                baths, Celsus Library and Grand theatre.Ephesus is one of the
                best-preserved ancient sites in the world showcasing the Temple
                of Artemis, Curetes street, famous Roman baths, Celsus Library
                and Grand theatre.
              </p>
              <GreenButton greenBtn={{linkCaption:"Learn about Ephesus", link:"https://www.history.com/topics/ancient-greece/ephesus"}}/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="rounded-4 overflow-hidden">
              <Image src={image1} layout="responsive" alt="..." priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
