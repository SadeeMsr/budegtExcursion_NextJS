import styles from "../../styles/TopDestination.module.css";
import Image from "next/image";
import cardData from "../../utilities/CardData";
import Link from "next/link";

export default function TopDestinationSection() {
  return (
    <section
      className={`d-flex justify-content-center align-items-center ${styles.top_dest_container}`}
    >
      <div
        className={`container d-flex justify-content-center align-items-center`}
      >
        <div className="row">
          <h1 className="text-center fw-bold pb-3">Top destinations in 2022</h1>
          <p className="text-center text-muted pb-5">
            Our travel experts craft the perfect trip for every traveler
          </p>
          {cardData.map((card, index) => {
            return (
              <div key={index} className="col mt-xl-0 mt-5">
                <div className={`card shadow-lg ${styles.card_dimensions}`}>
                  <div>
                    <Image
                      src={card.img}
                      height="65%"
                      width="100%"
                      className="card-img-top"
                      layout="responsive"
                      alt="..."
                      priority
                    />
                  </div>

                  <div className="card-body container d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-semibold">{card.country}</h5>
                      <p className="card-text fw-light text-muted pt-4">
                        {card.desc}
                      </p>
                    </div>
                    <div>
                      <Link  href="#contacts">
                        <a className="nav-link text-muted">
                          Contact for more &gt;{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
