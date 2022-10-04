import Image from "next/image";
import image1 from "../../public/turkeyPublic.jpg";
import image2 from "../../public/lunchTurkey.jpg";
import image3 from "../../public/bus.jpg";

export default function PackageInclude() {
  return (
    <div id="PackageInclude">
      <div>
        <div className="row">
          <div className="col">
            <div className="overflow-hidden">
              <Image src={image1} layout="responsive" alt="..." priority />
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div>
              <h4 className="text-center fw-bolder">Transportation</h4>
              <p className="text-center fw-light">
                All of the buses we use are luxury air conditioned buses. Most
                of them have TV, freezer available. All of the buses used
                intercity are very clean, comfortable and safe. You will witness
                a lot of interesting and beautiful views during the journey. For
                long bus journeys, we give a small break every 2-5 hours to
                relax.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="overflow-hidden">
              <Image src={image2} layout="responsive" alt="..." priority />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col  d-flex justify-content-center align-items-center">
            <div>
              <h4 className="text-center fw-bolder">Tour Guide</h4>
              <p className="text-center fw-light">
                You will have a tour guide all the way from Istanbul to
                Cappadocia, so every bit of history is properly understood and
                every bit of mystery unveiled
              </p>
            </div>
          </div>
          <div className="col">
            <div className="overflow-hidden">
              <Image src={image3} layout="responsive" alt="..." priority />
            </div>
          </div>
          <div className="col  d-flex justify-content-center align-items-center">
            <div>
              <h4 className="text-center fw-bolder">Meals</h4>
              <p className="text-center fw-light">
                We have already arranged and paid for your breakfast, lunch and
                dinner for most of the tour so you don&apos;t have to waste
                unnecessary time looking for where to eat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
