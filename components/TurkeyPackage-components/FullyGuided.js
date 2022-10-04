import TourPlaceCard from "../utility-components/TourPlaceCard";
import { FaChurch,FaUmbrellaBeach, FaCloud, FaPlaceOfWorship,  } from "react-icons/fa";
import { TbBeachOff } from "react-icons/tb";
import { GiFlowerPot } from "react-icons/gi";

export default function FullyGuided() {

  const placeData = {
    Istanbul: {
        placeName: "Istanbul",
        desc: "Istanbul is a most fascinating city, which actually crosses two continents Europe and Asia. It is a city of amalgamation of museums, bazaars, minarets, mosques, churches, palaces, and restaurants catering to every one’s taste, customs and fifteen million people. Our package will include all museum passes in the itinerary",
        link: '#Istanbul',
    },
    Troy: {
        placeName: "Troy",
        desc: "Visit the famous archeological and mythological site of Troy, home of the Trojan Horse and Helen of Troy.  Then, we will visit the magnificent acropolis of Pergamon. Its impressive temples and library made it a renowned cultural and political centre at that times. Pergamon is a famous city for its jewellery, stones and silver.",
        link: '#Troy'
    },
    Ephesus: {
        placeName: "Ephesus",
        desc: "Considered to be one of the best-preserved ancient sites in the world en - route, we will visit the Temple of Artemis, Curetes street, famous Roman baths, Celsus Library and Grand theatre.",
        link: '#Ephesus'
    },
    Pamukkale: {
        placeName: "Pamukkale",
        desc: "You will witness the magnificent and unique view of nature by viewing the morning sunrise over the ancient city of Hierapolis and Cotton White Travertines which is listed as one of the best 7 wonders of the world and registered in the UNESCO heritage list. ",
        link: '#Pamukkale'
    },
    Antalya: {
        placeName: "Antalya",
        desc: "Antalya is a land full of culture, history and nature. In history it was once the sprawling modern Roman town. The Hadrian's Gate is a triumphal arch which was built in the name of the Roman emperor Hadrian. Antalya's broken wonder is the Broken Minaret of the Korkut Mosque. Then we have the Duden Waterfalls, whose streams aim at finding their way into the Mediterranean.",
        link: '#Antalya'
    },
    Cappadocia: {
        placeName: "Cappadocia",
        desc: "Love Valley Cappadocia is a hidden valley with scenic formations to say the least. We will watch the sunrise over those splendid fairy chimneys and valleys that impress people with their exquisiteness. We will also drive to Ozkonak Underground City, one of the best preserved Underground cities in Cappadocia.  ",
        link: '#Cappadocia'
    },
  };
 
  const logoIstanbul = <FaChurch className="text-light fs-3" />
  const logoTroy = <FaUmbrellaBeach className="text-light fs-3" />
  const logoEphesus = <FaCloud className="text-light fs-3" />
  const logoPamukkale = <FaPlaceOfWorship className="text-light fs-3" />
  const logoAntalya = <TbBeachOff className="text-light fs-3" />
  const logoCappadocia = <GiFlowerPot className="text-light fs-3" />

  return (
    <div className="py-5" id="fullyGuidedTour">
      <div className="container py-5">
        <h1 className="text-center fw-bolder">Fully Guided Package</h1>
        <p className="text-center text-muted">
          TOUR ROUTE: &nbsp; Istanbul - Gallipoli - Troy - Pergamon - Kusadasi -
          Ephesus - Pamukkale - Antalya - Konya - Cappadocia – Fly back to
          Istanbul
        </p>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-start">
            <TourPlaceCard data={placeData.Istanbul} logo={logoIstanbul} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-start">
            <TourPlaceCard data={placeData.Troy} logo={logoTroy}/>
          </div>
          <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-start">
            <TourPlaceCard data={placeData.Ephesus} logo={logoEphesus}/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-start">
            <TourPlaceCard data={placeData.Pamukkale} logo={logoPamukkale}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-start">
            <TourPlaceCard data={placeData.Antalya} logo={logoAntalya}/>
          </div>
          <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-start">
            <TourPlaceCard data={placeData.Cappadocia} logo={logoCappadocia}/>
          </div>
        </div>
      </div>
    </div>
  );
}
