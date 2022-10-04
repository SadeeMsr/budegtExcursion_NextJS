import React, { useEffect, useState } from "react";
import styles from "../../styles/NavbarHome.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { mainLinks } from "../../utilities/Navlinks";

export default function NavbarV2() {
  const [isShrunk, setShrunk] = useState(false);
  const [isIconClicked, setIconClick] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 1 &&
          document.documentElement.scrollTop < 1
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={
          isShrunk
            ? "fixed-top px-4 pb-3 navbar navbar-expand-lg bg-dark shadow-sm"
            : `fixed-top pt-md-3 px-4 navbar navbar-expand-lg ${
                isIconClicked ? "bg-dark" : ""
              }`
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <div
              className={isShrunk ? styles.nav_logo_shrunk : styles.nav_logo}
            >
              <Image src={logo} alt="Logo png" layout="responsive" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setIconClick(!isIconClicked);
            }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-md-3 mt-5 ms-auto">
              {mainLinks.map((navItem, index) => {
                if (navItem.nav_link !== "/SearchHotels") {
                  return (
                    <Link href={navItem.nav_link} key={index}>
                      <a className={`text-light nav-link ${styles.nav_content}`}>
                        {navItem.nav_name}
                      </a>
                    </Link>
                  );
                }

                if (navItem.nav_link === "/SearchHotels") {
                  return (
                    <a
                      href={navItem.nav_link}
                      key={index}
                      className={`text-light nav-link ${styles.nav_content}`}
                    >
                      {navItem.nav_name}
                    </a>
                  );
                }
              })}

              <div className="d-flex align-items-center mt-md-0 mt-3 ms-md-5">
                <Link href="https://www.facebook.com/budgetexcursions">
                  <a>
                    <FaFacebookF
                      className="me-3 fs-5 text-light"
                      target="_blank"
                    />
                  </a>
                </Link>
                <Link href="https://twitter.com/BudgetExcursion">
                  <a>
                    <FaTwitter
                      className="me-3 fs-5 text-light"
                      target="_blank"
                    />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/budgetexcursionsbd/?r=nametag">
                  <a>
                    <FaInstagram
                      className="me-3 fs-5 text-light"
                      target="_blank"
                    />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCSKWI7rDN1GrCTxfeQHFIpg">
                  <a>
                    <FaYoutube
                      className="me-3 fs-5 text-light"
                      target="_blank"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
