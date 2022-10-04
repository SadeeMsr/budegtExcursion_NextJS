import Layout from "../components/utility-components/Layout";
import Footer from "../components/utility-components/Footer";
import ParallaxContents from "../components/utility-components/ParallaxContents";
import bg1 from "../public/turkeyBirdSea.jpg"
import bg2 from "../public/turkeyFlagMosq.jpg"
import bg3 from "../public/airport.jpg"
import FullyGuided from "../components/TurkeyPackage-components/FullyGuided";
import Istanbul from "../components/TurkeyPackage-components/Istanbul";
import Troy from "../components/TurkeyPackage-components/Troy";
import Pamukkale from "../components/TurkeyPackage-components/Pamukkale";
import Ephesus from "../components/TurkeyPackage-components/Ephesus";
import Antalya from "../components/TurkeyPackage-components/Antalya";
import Cappadocia from "../components/TurkeyPackage-components/Cappadocia";
import PackageInclude from "../components/TurkeyPackage-components/PackageInclude";
import ParallaxContentsV2 from "../components/utility-components/ParallaxContentsV2";
import NavbarV2 from "../components/utility-components/NavbarV2";

export default function TurkeyPackage() {
  return (
    <div>
      <ParallaxContents  preHeader={"Immerse Yourself in this fully comprehensive package covering 6 cities! "} header={"Explore 11 days in Turkey"} link={"#fullyGuidedTour"} bg={bg1} />
      <FullyGuided />
      <Istanbul />
      <Troy />
      <Pamukkale />
      <Ephesus />
      <Antalya />
      <Cappadocia />
      <ParallaxContents preHeader={"What is a FULLY GUIDED TOUR?"} header={"What we include in this package"} link={"#PackageInclude"} bg={bg2} />
      <PackageInclude />
      <ParallaxContentsV2 header={"What are you waiting for ?"} link={"https://www.google.com"} bg={bg3} />
    </div>
  );
}

TurkeyPackage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavbarV2 />
      {page}
      <Footer />
    </Layout>
  );
};
