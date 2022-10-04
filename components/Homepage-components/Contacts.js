import styles from "../../styles/ContactUs.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  return (
    <div className="container pb-5" id="contacts">
      <div className="row pb-5">
        <div className="col d-flex justify-content-center align-items-center pb-5 pb-md-0">
          <div
            className={`text-center shadow-sm ${styles.callus_card_container}`}
          >
            <div className="position-relative d-flex justify-content-center align-items-center">
              <div
                className={`bg-success rounded-circle ${styles.caller_logo}`}
              >
                <FaPhoneAlt className="fs-4" />
              </div>
            </div>
            <h2>Call us</h2>
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
                <MdEmail className="fs-3" />
              </div>
            </div>
            <h2>Email us at</h2>
            <p>budgetexcursionsbd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
