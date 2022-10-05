import CountrySelection from "../utility-components/CountrySelection";
import smokey from "../../public/smokey.jpg";




export default function SelectedCountryMaldives() {
  return (
    <div className="container p-5">
      <div className="mt-5 pb-5">
        <h1 className="text-center fw-bold">Select a country</h1>
        <p className="text-center">
          All of the cards redirect to somewhere adventurous you will definitely
          like. Now the question is which one do you choose?
        </p>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center justify-content-md-end align-items-center">
            <CountrySelection
              country={"Kaani Grand Seaview"}
              desc={"Pick me if you’re looking for a really budget friendly package!"}
              bg={smokey}
              link={"/TurkeyPackage"}
            />
          </div>
          <div className="col mt-3 mt-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
            <CountrySelection
              country={"Varu By Atmosphere"}
              desc={"Pick me if you want want an ALL INCLUSIVE Beach Villa or Water Villa"}
              bg={smokey}
              link={"#KaaniGrandMafuushi"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
