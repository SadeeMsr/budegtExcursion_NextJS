import styles from "../../styles/Service.module.css";
import { RiChatCheckFill, RiHotelBedFill } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { FaTicketAlt, FaCcVisa } from "react-icons/fa";

export default function Service() {
  return (
    <div
      className={` ${styles.service_container}`}
    >
      <div className={`container d-flex justify-content-center align-items-center h-100`}>
        <div className="row">
            
          <div className={`col `}>
            <div
              className={`d-flex flex-column justify-content-between align-items-center ${styles.service_columns}`}
            >
              <RiChatCheckFill className={`${styles.service_icons}`} />
              <h1>Fully Guided Tour</h1>
              <BsDash className={`${styles.service_icons}`} />
            </div>
          </div>
          <div className={`col `}>
            <div className={`d-flex flex-column justify-content-between align-items-center ${styles.service_columns}`}>
            <RiHotelBedFill className={`${styles.service_icons}`} />
              <h1>Hotel Booking</h1>
              <BsDash className={`${styles.service_icons}`} />
            </div>
          </div>


          <div className={`col `}>
            <div
              className={`d-flex flex-column justify-content-between align-items-center ${styles.service_columns}`}
            >
              <FaTicketAlt className={`${styles.service_icons}`} />
              <h1>Air tickets</h1>
              <BsDash className={`${styles.service_icons}`} />
            </div>
          </div>
          <div className={`col `}>
            <div className={`d-flex flex-column justify-content-between align-items-center ${styles.service_columns}`}>
             <FaCcVisa className={`${styles.service_icons}`} />
              <h1>Visa support</h1>
              <BsDash className={`${styles.service_icons}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
