import Image from "next/image";

export default function PlaceDescRight({header, desc, img}) {
  return (
    <div className="row mt-5 py-lg-5 ">
      <div className="col-12 col-lg-6">
        <div className="rounded-4 overflow-hidden w-100 shadow">
          <Image
            src={img}
            layout="responsive"
            objectFit="cover"
            alt="..."
            priority
          />
        </div>
      </div>
      <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center">
        <div className="px-5">
          <h5 className="fw-bolder ">{header}</h5>
          <p className="fw-light text-muted mt-4">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
