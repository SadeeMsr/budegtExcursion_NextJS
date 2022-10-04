import ImageGalley from "../utility-components/ImageGalley";
import waterBikeRider from "../../public/waterBikeRider.jpg";
import groupPhoto from "../../public/groupPhoduuu.jpg";
import diningBrother from "../../public/DiningBrother.jpg";
import parasuitingBoy from "../../public/parasuitingBoy.jpg";
import ButtonGroup from "../utility-components/ButtonGroup";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiPlaneLine } from "react-icons/ri";

export default function DescSection() {
  const galleryPhotos = {
    imageOne: waterBikeRider,
    imageTwo: groupPhoto,
    imageThree: diningBrother,
    imageFour: parasuitingBoy,
  };

  const greenBTN = {linkCaption:"Check FAQ", link:"#faq"};
  const whiteBTN = {linkCaption:"Contact us", link:"#contacts"};

  return (
    <div className="container pb-5" id="about">
      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          <ImageGalley images={galleryPhotos} />
        </div>
        <div className="col-12 col-lg-6 ps-4 ps-lg-5 pt-5 pt-lg-0">
          <h2 className="fw-bold" style={{ fontSize: "35px" }}>
            Budget Excursions group travel
          </h2>
          <p className="fw-light">
            Budget Excursions provide opportunities to travel with groups. This
            help us lower your costs considerably as you get to share your
            itinerary with a bigger group.
          </p>
          <ButtonGroup greenBtn={greenBTN} whiteBtn={whiteBTN}/>

          {/* 1st row--------------*/}
          <div className="row pt-5">
            <div className="col-12 col-md-6 row">
              <div className="col-2">
                <BsFillPeopleFill style={{color:'#355985'}} className="fs-3" />
              </div>
              <div className="col-10">
                <h6 className="fw-bold">Dedicated experts</h6>
                <p className="fw-light">
                  Leave all the planning to us, we&apos;ll take care of every
                  single minute of your trip.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 row">
              <div className="col-2">
                <AiFillDollarCircle style={{color:'#355985'}} className="fs-3" />
              </div>
              <div className="col-10">
                <h6 className="fw-bold">Convenient payments</h6>
                <p className="fw-light">
                  We provide flexible options regarding the payment, be it via
                  cash or transfer.
                </p>
              </div>
            </div>
          </div>

           {/* 2nd row--------------*/}
          <div className="row mt-2">
            <div className="col-12 col-md-6 row">
              <div className="col-2">
                <MdConnectWithoutContact style={{color:'#355985'}} className="fs-3" />
              </div>
              <div className="col-10">
                <h6 className="fw-bold">Like-minded people</h6>
                <p className="fw-light">
                  Share travel adventure stories with people having similar
                  interests as you.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 row">
              <div className="col-2">
                <RiPlaneLine style={{color:'#355985'}} className="fs-3" />
              </div>
              <div className="col-10">
                <h6 className="fw-bold">Stress-free travelling</h6>
                <p className="fw-light">
                  Enrolling in a group travel, everything from hotels to
                  excursions is taken care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
