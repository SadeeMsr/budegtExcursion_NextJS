import styles from "../../styles/ContactUs.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  return (
    <div className={`pb-5 ${styles.container_contactus}`} id="contacts">
      <div className="row pb-5 container ">
        <div className="col d-flex justify-content-lg-end justify-content-center align-items-center pb-5 pb-md-0 mt-5">
          <div
            className={`text-center shadow-sm ${styles.callus_card_container}`}
          >
            <div className="position-relative d-flex justify-content-center align-items-center">
              <div
                className={`bg-success rounded-circle ${styles.caller_logo}`}
              >
                <FaPhoneAlt className="fs-4 text-light" />
              </div>
            </div>
            <h5 className="fw-bolder">Call us</h5>
            <p>+880 19 1034 3834</p>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center mt-md-5">
          <div
            className={`text-center shadow-sm ${styles.callus_card_container}`}
          >
            <div className="position-relative d-flex justify-content-center align-items-center">
              <div
                className={`bg-success rounded-circle ${styles.caller_logo}`}
              >
                <MdEmail className="fs-2 text-light" />
              </div>
            </div>
            <h5 className="fw-bolder">Email us at</h5>
            <p>budgetexcursionsbd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
