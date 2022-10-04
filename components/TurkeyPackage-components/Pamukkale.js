import Image from "next/image";
import image1 from "../../public/chinaMountain.jpg";
import image2 from "../../public/ancientStage.jpg";
import Link from "next/link";

export default function Pamukkale() {
  return (
    <div style={{ backgroundColor: "#EFF3FC" }} id="Pamukkale">
      <div className="container py-5">
        <h1 className="fw-bolder text-center">Pamukkale</h1>
        <p className="fw-light text-muted text-center">
          Mind-blowing natural phenomenon and Historical Site
        </p>
        <div className="row container py-5">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-end">
              <div className="w-75">
                <div className="rounded-4 overflow-hidden">
                  <Image src={image1} layout="responsive" alt="..." priority />
                </div>
              </div>
              <div className="w-75 pt-4">
                <h4 className="fw-bolder">Hierapolis</h4>
                <p className="text-muted fw-light">
                  The ancient Hierapolis (Holy City in Turkish) was founded as a
                  thermal spa in the 2nd century BC. The ruins of this ancient
                  Greek city are located atop the hot springs, adjacent to the
                  travertine terraces.
                </p>
                <Link href="https://rtwin30days.com/pamukkale-turkey/">
                  <a className="nav-link text-muted" target="_blank">Learn more &gt;</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-4 mt-lg-0">
              <div className="w-75">
                <h4 className="fw-bolder">The travertine terraces</h4>
                <p className="text-muted fw-light">
                  Though they have the appearance of salt, the scalloped
                  terraces of Pamukkale are actually made of travertine, a
                  sedimentary rock deposited by the thermal waters of 17 hot
                  water springs.
                </p>
                <Link href="https://www.youtube.com/watch?v=NN9O68b95Mw">
                  <a className="nav-link text-muted" target="_blank">Watch video &gt;</a>
                </Link>
              </div>
              <div className="w-75 mt-4">
                <div className="rounded-4 overflow-hidden">
                  <Image src={image2} layout="responsive" alt="..." priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
