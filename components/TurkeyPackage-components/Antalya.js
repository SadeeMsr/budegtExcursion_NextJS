import Carousel from "../utility-components/Carousel";
import image1 from "../../public/HadriansGate.jpg";
import image2 from "../../public/Kaleici.jpg";
import image3 from "../../public/yukari-duden-antalya.jpg";


export default function Antalya() {
  const carouselContent = [
    {
      interval: "5000",
      imgSrc: image1,
      captionTitle: "Hadriens Gate",
      desc: "A historical site not to be missed. Just off Atatürk Boulevard you’ll see the impressive three double arches of the gates, which were erected in 130 to celebrate the visit of Emperor Hadrian. Legend has it that in ancient times, the queen of Sheba passed through the middle arch on her way to Aspensos and spent a happy night with King Salomon. With the exception of the columns, the arch is made from white marble and is richly decorated.",
      link:'https://theculturetrip.com/europe/turkey/articles/all-you-need-to-know-about-hadrians-gate-the-famous-arch-in-antalya/',
      AnchorName:"Learn more"
    },
    {
        interval: "2000",
        imgSrc: image2,
        captionTitle: "Old Town",
        desc: "The old town is reminiscent of the Europe you have seen in movies. Discover the turquoise  coast, the gorgeous Apollo temple on the seaside. Get lost in the nightlife in the bars and restaurants along the amazing turquoise water.",
        link:"https://www.youtube.com/watch?v=G18xPJFwFhQ",
        AnchorName:"Watch video"
      },
    {
      interval: "0",
      imgSrc: image3,
      captionTitle: "Düden Waterfalls",
      desc: "The Duden Waterfalls are actually two separate natural attractions within the City of Antalya. Upper & Lower Waterfalls. The Upper Duden Waterfalls are a series of small cascades in a tranquil municipal park. When visiting the upper falls within the park, don't miss climbing down a spiral staircase that leads into a cave behind the waterfalls. This experience affords fabulous views through a curtain of falling water.",
      link:"https://www.routesandtrips.com/day-trip-to-duden-waterfalls/",
      AnchorName:"Learn more"
    },
  ];

  return (
    <div className="py-0 py-lg-5" style={{ backgroundColor: "#EFF3FC" }} id="Antalya">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-lg-6">
            <Carousel data={carouselContent} id={"carouselExampleDark3"} />
          </div>
          <div
            className="col-12 col-lg-6 d-flex justify-content-center align-items-center"
          >
            <div className="ms-0 mt-3 mt-lg-0 ms-lg-5">
              <h1 className="fw-bolder">Antalya</h1>
              <p className="text-muted pe-lg-5">
                Antalya isn’t just a city – it’s a region along most of Turkey’s
                Mediterranean coast that is quickly becoming everyone’s favorite
                playground. For starters, the region’s seaside location makes
                for mild winters (but expect lots of rain) and warm, balmy
                summers.With Antalya’s (relatively) lower cost of living and
                lots to see and do, now is the time to consider booking a trip
                here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
