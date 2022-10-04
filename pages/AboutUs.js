import Footer from "../components/utility-components/Footer";
import Layout from "../components/utility-components/Layout";
import NavbarHome from "../components/utility-components/NavbarHome";
import VideoSection from "../components/utility-components/VideoSection";
import {AboutUsContent} from "../utilities/VideoContentData"



export default function AboutUs() {
  return (
    <div className="pb-5 mt-5">
        <VideoSection contents={AboutUsContent} />
    </div>
  )
}

AboutUs.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavbarHome />
        {page}
        <Footer/>
      </Layout>
    );
  };