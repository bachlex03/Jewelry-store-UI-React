import styles from "./SiteHeader.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import { SiteSubHeader, SiteCatalog, SiteBreadcrumb } from "./components";
import { Button } from "~/components";

const cx = classNames.bind(styles);

function SiteHeader() {
  return (
    <>
      <header>
        <nav className={cx("wrapper")}>
          <div className="flex justify-between align-center section-1200">
            <ul className={cx("list")}>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">About us</Link>
              </li>
              <li>
                <Link to="/home">Gallery</Link>
              </li>
              <li>
                <Link to="/home">Contact us</Link>
              </li>
            </ul>

            <div className={cx("action")}>
              <Button to="/login" header primary>
                <i className={cx("icon")}>
                  <FontAwesomeIcon icon={faRightToBracket} />
                </i>
                Login
              </Button>

              <Button to="/customer/dashboard" header primary>
                <i className={cx("icon")}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                My account
              </Button>
            </div>
          </div>
        </nav>

        <SiteSubHeader />
        <SiteCatalog />
        <SiteBreadcrumb />
      </header>
    </>
  );
}

export default SiteHeader;

// eslint-disable-next-line
{
  /* <a href="/admin/stored/products">
                <i className={cx("icon")}>
                  <FontAwesomeIcon icon={faUserTie} />
                </i>
                Admin
              </a> */
}

// eslint-disable-next-line
{
  /* <a href="/user/logout">
               <i className={cx("icon")}><FontAwesomeIcon icon={faUserTie} /></i>
                Sign out
              </a> */
}
