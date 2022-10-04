import Carousel from "../utility-components/Carousel";
import image1 from "../../public/HagiaSophiaGrandMosque.jpg"
import image2 from "../../public/SultanahmetSquare.jpg"
import image3 from "../../public/thijs-kennis-eTjvgcbrQz4-unsplash.jpg"

export default function Istanbul() {
  
  const carouselContent = [
    {
        interval: "5000",
        imgSrc: image1,
        captionTitle: "Hagia Sophia Grand Mosque",
        desc: "Hagia Sophia Grand Mosque is the greatest surviving example of Byzantine Architecture. For 1000 years, it was once the largest church in the world, decorated with stunning 6th century golden mosaics. Today it is a mosque.",
    },
    {
        interval: "2000",
        imgSrc: image2,
        captionTitle: "Ancient Hippodrome",
        desc: "Ancient Hippodrome was the scene of chariot races, with the three monuments; the Obelisk of Theodosius, the bronze Serpentine Column and the Column of Constantine.",
    },
    {
        interval: "0",
        imgSrc: image3,
        captionTitle: "Asil Efendi",
        desc: "Asil Efendi is a unique atmosphere with reasonable prices for your shopping. Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil.",
    },
  ]

  return (
    <div style={{backgroundColor:'#EFF3FC'}} id="Istanbul">
      <div className="container">
        <h1 className="fw-bolder text-center text-uppercase py-5">Tourist spots we will be visiting in <span className="text-success fst-italic">TURKEY</span></h1>
        <div className="row mt-5">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center" style={{minHeight:"500px"}}>
            <div>
              <h1 className="fw-bolder">Istambul</h1>
              <p className="text-muted pe-lg-5">
                Prepare to be awed by Istanbul’s magnificent architecture, rich
                history, and eclectic bazaars as you discover the unmissable
                highlights of the Old City on this 1, 2, or 3-day private
                tour. Marvel over the glorious Hagia Sophia, learn how the Blue
                Mosque earned its famous nickname, and see the ancient Basilica
                Cistern. Tour Topkapi Palace to gain an insight into the lavish
                lifestyles of the Ottoman sultans and their harem, and browse
                the legendary Grand Bazaar, where you find everything from
                carpets to Turkish delight.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Carousel data={carouselContent} id={"carouselExampleDark1"} />
          </div>
        </div>
      </div>
    </div>
  );
}
