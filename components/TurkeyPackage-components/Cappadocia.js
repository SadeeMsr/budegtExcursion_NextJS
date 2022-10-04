import Image from "next/image";
import image1 from "../../public/Cappadocia.jpg";

export default function Cappadocia() {
  return (
    <div>
      <div className="container" id="Cappadocia">
        <div className="row py-5">
          <div
            className="col-12 col-lg-6 d-flex justify-content-center align-items-center"
            style={{ minHeight: "500px" }}
          >
            <div>
              <h1 className="fw-bolder">Cappadocia</h1>
              <p className="text-muted pe-lg-5">
                Cappadocia is a beautiful region in central Turkey famous for
                its fairytale scenery, cave dwellings, remarkable rock
                formations and, of course, the hundreds of hot air balloons that
                soar in the sky during sunrise each morning. There is also so
                much awesome hiking in Cappadocia, that it will take you at
                least a week to explore all of the diverse hiking trails in the
                region.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="rounded-4 overflow-hidden">
              <Image src={image1} layout="responsive" alt="..." priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
