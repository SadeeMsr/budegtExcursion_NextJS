import NavbarHome from "../components/utility-components/NavbarHome";
import Layout from "../components/utility-components/Layout";
import Footer from "../components/utility-components/Footer";
import ElevenDaysTurkey from "../components/PackagePage-components/ElevenDaysTurkey";
import IntroPackage from "../components/PackagePage-components/IntroPackage";
import RafsanTC from "../components/PackagePage-components/RafsanTC";
import SelectCountry from "../components/PackagePage-components/SelectCountry";
import ParallaxContents from "../components/utility-components/ParallaxContents";
import bg1 from "../public/redCar.jpg";
import bg2 from "../public/bikiniGirl.jpg";
import bg3 from "../public/temple.jpg";
import bg4 from "../public/twinTower.jpg";
import KaaniGrandMafuushi from "../components/PackagePage-components/KaaniGrandMafuushi";
import AquzzIn from "../components/PackagePage-components/AquzzIn";
import Pattaya from "../components/PackagePage-components/Pattaya";
import Malaysia from "../components/PackagePage-components/Malaysia";
import NavbarV2 from "../components/utility-components/NavbarV2";




export default function Packages() {
  return (
    <div>
        <IntroPackage />
        <SelectCountry />
        <RafsanTC />
        <ParallaxContents preHeader={"Your Fairytale Awaits"} header={"Explore Turkey"} link={"/TurkeyPackage"} bg={bg1} />
        <ElevenDaysTurkey />
        <ParallaxContents preHeader={"Your Fantasy Beach Vacation"} header={"Maldives"} link={"#KaaniGrandMafuushi"} bg={bg2} />
        <KaaniGrandMafuushi />
        <AquzzIn />
        <ParallaxContents preHeader={"A Melting Pot "} header={"Thailand"} link={"#Pattaya"} bg={bg3} />
        <Pattaya />
        <ParallaxContents preHeader={"Truly Asia"} header={"Malaysia"} link={"#Malaysia"} bg={bg4} />
        <Malaysia />
    </div>
  )
}

Packages.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavbarV2 />
        {page}
        <Footer/>
      </Layout>
    );
  };