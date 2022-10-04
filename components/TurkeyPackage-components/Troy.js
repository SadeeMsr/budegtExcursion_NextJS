import Carousel from "../utility-components/Carousel";
import image1 from "../../public/troy.jpg";
import image2 from "../../public/Pergamon.jpg";
import image3 from "../../public/gallipoli.jpg";

export default function Troy() {
  const carouselContent = [
    {
      interval: "5000",
      imgSrc: image1,
      captionTitle: "TROY",
      desc: "Explore the archeological site at Troy, learn about the Trojan War and see the famous wooden Trojan Horse",
    },
    {
      interval: "2000",
      imgSrc: image2,
      captionTitle: "PERGAMON",
      desc: "Ancient Pergamon settlement at the top of the Kale Hill, the capital of Hellenistic Attalid Dynasty, represents the outstanding example of urban planning of the Hellenistic period with its monumental architecture. ",
    },
    {
      interval: "0",
      imgSrc: image3,
      captionTitle: "GALLIPOLI",
      desc: "Tour the WWI battlefields at Gallipoli. . During a walking tour, see quaint memorials at Chunuk Bair, Lone Pine and Anzac Cove and enjoy time on your own to explore more of the April 25, 1915 aftermath. ",
    },
  ];

  return (
    <div id="Troy">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6">
            <Carousel data={carouselContent} id={"carouselExampleDark2"}/>
          </div>
          <div
            className="col-12 col-lg-6 d-flex justify-content-center align-items-center"
            style={{ minHeight: "500px" }}
          >
            <div>
              <h1 className="fw-bolder ps-lg-5">Gallipoli and Troy</h1>
              <p className="text-muted ps-lg-5">
                Visit the notorious WWI battlefields of Gallipoli in just one
                day on this full-day tour from Istanbul, including lunch and
                hotel pick-up. See ANZAC Cove, where the troops first landed;
                visit the ANZAC Commemorative Site, where the Dawn Service is
                held; walk along Brighton beach; and learn about the war from
                both perspectives as you view the Allied and Turkish trenches at
                Johnston&gt;s Jolly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
