import Image from "next/image";
import Link from "next/link";

export default function Carousel({ data, id }) {
  return (
    <div>
      <div
        id={id}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${item.interval==="5000"?'active':''}`}
                data-bs-interval={item.interval}
              >
                <div className="rounded-4 overflow-hidden">
                  <Image src={item.imgSrc} layout="responsive" alt="..." priority />
                </div>
                <div
                  className="carousel-caption d-none d-md-block rounded"
                  style={{ backgroundColor: "rgba(134, 137, 137, 0.6)" }}
                >
                  <h5>{item.captionTitle}</h5>
                  <p>
                    {item.desc}
                  </p>
                  {
                    item.link? <Link href={item.link}><a className="nav-link text-light fw-bold text-decoration-underline" target="_blank">{item.AnchorName} &gt;</a></Link>:''
                  }
                </div>
              </div>
            );
          })}
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
