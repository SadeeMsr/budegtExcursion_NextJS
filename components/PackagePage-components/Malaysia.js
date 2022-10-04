import festiveMalaysia from "../../public/festiveMalaysia.jpg";
import curvedBridge from "../../public/curvedBridge.jpg";
import malaysiaTower from "../../public/malaysiaTower.jpg";
import colouredStair from "../../public/colouredStair.jpg";
import ImageGalley2 from "../utility-components/ImageGalley2";
import GreenButton from "../utility-components/GreenButton";

export default function Malaysia() {
  const galleryPhotos = {
    imageOne: festiveMalaysia,
    imageTwo: curvedBridge,
    imageThree: malaysiaTower,
    imageFour: colouredStair,
  };

  return (
    <div className="py-4" style={{ backgroundColor: "#D4D4F2" }} id="Malaysia">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-lg-6">
            <ImageGalley2 images={galleryPhotos} />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="px-2 px-lg-5 mt-5 mt-lg-0">
              <h1 className="fw-bolder">
                Kuala Lumpur & Langkawi 5 Days & 4 Nights
              </h1>
              <p className="fw-light text-muted mt-4">
                &quot;Malaysia, Truly Asia&quot; captures and defines the
                essence of the country&apos;s unique diversity. It sums up the
                distinctiveness and allure of Malaysia that make it an
                exceptional tourist destination. There is only one place where
                all the colour&apos;s, flavours, sounds and sights of Asia come
                together – Malaysia. For our free-floating package, you&apos;ll
                be staying at the luxurious hotel of EDC Kuala Lumpur and the
                Bella Vista Hotel in Langkawi. Airport to Hotel transportation
                will also be arranged by us!
              </p>
              <GreenButton greenBtn={{linkCaption:"Get Started", link:"https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F114020414634464%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0"}} isDestinationPage={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
