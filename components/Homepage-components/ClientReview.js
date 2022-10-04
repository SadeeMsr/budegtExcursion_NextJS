import styles from "../../styles/ClientReview.module.css";

export default function ClientReview() {
  return (
    <div className={`${styles.client_review_container}`} id="impressions">
      <div className={`${styles.carousal_container}`}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-75"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active bg-dark"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="active bg-dark"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              className="active bg-dark"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner text-center pb-5">
            <div className="carousel-item active ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p>Khandokar Shafiul Haque</p>
                <h3 className="fw-bold">
                  Wasif bhai is the boss when it comes to planning an itinerary.
                  I got introduced to him by a mutual friend. I have never used
                  a travel agency before, so I was not sure what to expect. Now
                  that I did it, I will never go back to planning trips on my
                  own!
                </h3>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p>Khandokar Shafiul Haque</p>
                <h3 className="fw-bold">
                  Wasif bhai is the boss when it comes to planning an itinerary.
                  I got introduced to him by a mutual friend. I have never used
                  a travel agency before, so I was not sure what to expect. Now
                  that I did it, I will never go back to planning trips on my
                  own!
                </h3>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p>Khandokar Shafiul Haque</p>
                <h3 className="fw-bold">
                  Wasif bhai is the boss when it comes to planning an itinerary.
                  I got introduced to him by a mutual friend. I have never used
                  a travel agency before, so I was not sure what to expect. Now
                  that I did it, I will never go back to planning trips on my
                  own!
                </h3>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
