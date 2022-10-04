import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SearchBox.module.css";
import Layout from "../components/utility-components/Layout";
import NavbarHome from "../components/utility-components/NavbarHome";
import Footer from "../components/utility-components/Footer";

export default function SearchHotels() {
  const router = useRouter();

  function lu() {
    // var stg = new Object();
    // stg.crt = "4582351600412";
    // stg.version = "1.04";
    // stg.id = stg.name = "adgshp1675560098";
    // stg.width = "1288px";
    // stg.height = "300px";
    // stg.ReferenceKey = "T7P86zKHnB6m0xrDN7g5aw==";
    // stg.Layout = "Oneline";
    // stg.Language = "en-us";
    // stg.Cid = "1905968";
    // stg.DestinationName = "";
    // stg.OverideConf = false;
    // new AgdSherpa(stg).initialize();

    var stg = new Object();
    stg.crt = "4608004283294";
    stg.version = "1.04";
    stg.id = stg.name = "adgshp1675560098";
    stg.width = "320px";
    stg.height = "420px";
    stg.ReferenceKey = "T7P86zKHnB6m0xrDN7g5aw==";
    stg.Layout = "SquareCalendar";
    stg.Language = "en-us";
    stg.Cid = "1905968";
    stg.DestinationName = "";
    stg.OverideConf = false;
    new AgdSherpa(stg).initialize();
  }

  return (
    <div
      style={{ height: "580px" }}
      className="d-flex d-flex justify-content-center align-items-end mb-5"
    >
      <div className="rounded-4 overflow-hidden shadow-lg">
        <Script
          id="showSearch"
          src="//cdn0.agoda.net/images/sherpa/js/sherpa_init1_08.min.js"
          onLoad={() => {
            lu();
          }}
        ></Script>
        <div className={`${styles.container_bal}`} id="adgshp1675560098"></div>
      </div>
      {/* <button onClick={() => router.reload()}>
          click
        </button> */}
    </div>
  );
}

SearchHotels.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavbarHome />
      {page}
      <Footer />
    </Layout>
  );
};
