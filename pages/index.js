import Layout from "../components/utility-components/Layout";
import NavbarHome from "../components/utility-components/NavbarHome";
import IntroSection from "../components/Homepage-components/IntroSection";
import TopDestinationSection from "../components/Homepage-components/TopDestinationSection";
import Service from "../components/Homepage-components/Service";
import VirtualAssistantSection from "../components/Homepage-components/VirtualAssistantSection";
import CompanyDesc from "../components/Homepage-components/CompanyDesc";
import VideoSection from "../components/utility-components/VideoSection";
import { TouringSectionContent } from "../utilities/VideoContentData";
import DescSection from "../components/Homepage-components/DescSection";
import Faq from "../components/Homepage-components/Faq";
import PerfectHoliday from "../components/Homepage-components/PerfectHoliday";
import Footer from "../components/utility-components/Footer";
import ClientReview from "../components/Homepage-components/ClientReview";
import Contacts from "../components/Homepage-components/Contacts";

export default function Index() {
  return (
    <div className="overflow-hidden">
      <IntroSection />
      <TopDestinationSection />
      <Service />
      <VirtualAssistantSection />
      <CompanyDesc />
      <VideoSection contents={TouringSectionContent} />
      <DescSection />
      <Faq />
      <PerfectHoliday />
      <ClientReview />
      <Contacts />
      <Footer />
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavbarHome />
      {page}
    </Layout>
  );
};
