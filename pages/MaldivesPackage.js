import Layout from "../components/utility-components/Layout";
import NavbarV2 from "../components/utility-components/NavbarV2";
import Footer from "../components/utility-components/Footer";
import IntroPackage from "../components/PackagePage-components/IntroPackage";
import bg1 from "../public/maldives2.jpg"
import bg2 from "../public/iceTeaMaldives.jpg"
import SelectedCountryMaldives from "../components/MaldivesPackage-components/SelectedCountryMaldives";
import ParallaxContentsV2 from "../components/utility-components/ParallaxContentsV2";
import InclusivePackages from "../components/MaldivesPackage-components/InclusivePackages";
import GuidedItinery from "../components/MaldivesPackage-components/GuidedItinery";

export default function MaldivesPackage() {
  return (
    <div>
        <IntroPackage title={"Maldives"} subtitle={"A tropical haven of white sand beaches"} bg={bg1} />
        <SelectedCountryMaldives />
        <ParallaxContentsV2 postHeader={"Deluxe Room with Ocean View and Balcony"} header={"Kaani Grand Seaview"} link={"https://www.google.com"} bg={bg2}/>
        <InclusivePackages />
        <GuidedItinery />
    </div>
  )
}

MaldivesPackage.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavbarV2 />
        {page}
        <Footer />
      </Layout>
    );
  };