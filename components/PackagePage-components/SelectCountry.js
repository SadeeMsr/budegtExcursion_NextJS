import CountrySelection from "../utility-components/CountrySelection";
import malaysiaTower from "../../public/malaysiaTower.jpg";
import temple from "../../public/temple3.jpg";
import maldives from "../../public/maldives.jpg";
import ballons from "../../public/ballons.jpg";


export default function SelectCountry() {
  return (
    <div className="container p-5">
      <div className="mt-5 pb-5">
        <h1 className="text-center fw-bold">Select a country</h1>
        <p className="text-center">All of the cards redirect to somewhere adventurous you will definitely like. Now the question is which one do you choose?</p>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center justify-content-md-end align-items-center">
           <CountrySelection country={"Turkey"} desc={"11 day Fully Guided Tour Package"} bg={ballons} link={"/TurkeyPackage"} />
          </div>
          <div className="col mt-3 mt-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
          <CountrySelection country={"Maldives"} desc={"Kaani Grand Seaview or Varu By Atmosphere"} bg={maldives} link={"#KaaniGrandMafuushi"} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-flex justify-content-center justify-content-md-end align-items-center">
          <CountrySelection country={"Thailand"} desc={"Experience Bangkok and Pattaya"} bg={temple} link={"#Pattaya"} />
          </div>
          <div className="col mt-3 mt-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
          <CountrySelection country={"Malaysia"} desc={"Kuala Lumpur & Langkawi"} bg={malaysiaTower} link={"#Malaysia"} />
          </div>
        </div>
      </div>
    </div>
  );
}
