import Image from "next/image";
import image1 from "../../public/beachBenches.jpg";
import GreenButton from "../utility-components/GreenButton";

export default function AquzzIn() {
  return (
    <div className="container py-0 py-lg-5 ">
      <div className="py-0 pb-5 py-lg-5">
        <div className="row pt-0 pt-lg-5">
          <div className="col-12 col-lg-6 mt-5 mt-lg-0 pb-4 pb-lg-0">
            <div>
              <h1 className="fw-bolder">Aquzz Inn</h1>
              <p className="fw-light text-muted pe-5 mt-4">
                A much more accessible hotel if you are under a budget. You get
                to experience all the amenities we have secured with Kaani Grand
                Seaview for a much cheaper price. Located in the heart of the
                city center, Aquzz Inn is only a short 10 minute walk to Bikini
                Beach. For both Aquzz Inn and Kaani Grand, we have arranged
                Speedboat transfer from your airport to Maafushi Island with
                return as well.
              </p>
            </div>
            <GreenButton greenBtn={{linkCaption:"Get Started", link:"https://www.history.com/topics/ancient-greece/ephesus"}} />
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
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
    </div>
  );
}
