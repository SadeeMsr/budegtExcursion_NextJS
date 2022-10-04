import VideoSection from "../utility-components/VideoSection";
import { VirtualAssistantSectionContent } from "../../utilities/VideoContentData";
import ButtonGroup from "../utility-components/ButtonGroup";

export default function VirtualAssistantSection() {
  const styles = {
    height: "55rem",
    paddingTop: "80px",
  };

  const greenBTN = {linkCaption:"Lets go", link:""};
  const whiteBTN = {linkCaption:"Learn more", link:"/Packages"};


  return (
    <div
      className={`container overflow-hidden text-center d-flex flex-column justify-content-center align-items-center`}
      styles={styles}
    >
      <VideoSection contents={VirtualAssistantSectionContent} />
      <div className="pb-3">
        <ButtonGroup greenBtn={greenBTN} whiteBtn={whiteBTN} />
      </div>
      
    </div>
  );
}
