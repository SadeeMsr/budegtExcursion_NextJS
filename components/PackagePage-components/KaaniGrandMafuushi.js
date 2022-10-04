import Image from "next/image";
import image1 from "../../public/beachBenches.jpg";

export default function KaaniGrandMafuushi() {
  return (
    <div className="container pt-5" id="KaaniGrandMafuushi">
      <div className="pt-4">
        <h1 className="text-center fw-bolder">
          Kaani Grand Seaview in Maafushi
        </h1>
        <p className="text-center fw-light text-muted">
          The ultimate Beach vacation filled with activities
        </p>
        <div className="row py-5">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center pe-md-5">
            <div className="rounded-4 overflow-hidden w-100 shadow">
              <Image
                src={image1}
                layout="responsive"
                objectFit="cover"
                alt="..."
                priority
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0 border-start ps-3 ps-md-5">
            <div>
              <h5 className="fw-bolder">5 nights in a 4 star hotel.</h5>
              <p className="fw-light text-muted mt-4">
                Kaani Grand Seaview is one of Maafushi’s finest Hotel, situated
                on the magnificent beachfront, directly opposite the Bikini
                Beach. The Hotel combines splendid service with quality
                accommodation, stylish cuisine and facilities for a perfect
                family holiday, business trip or relaxing getaway. We have
                partnered with Kaani Grand Seaview to offer our clients a bunch
                of complimentary activities included in their vacation package.
                These activities include a full day excursion trip with
                snorkelling to 3 reefs, dolphin watching, lunch on sandbank,
                Maldivian style Fishing trip and free buffet dinner for the 5
                nights of your stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
