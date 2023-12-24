import style from "./SiteHeader.module.scss";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import SiteSubHeader from "./components/SiteSubHeader";
import SiteCatalog from "./components/SiteCatalog";

import { Button } from "~/components";

const cx = classNames.bind(style);

function NoBreadcrumb() {
  return (
    <>
      <header>
        <nav className={cx("wrapper")}>
          <div className="flex justify-between align-center section-1200">
            <ul className={cx("list")}>
              <li>
                <a href="!#">Home</a>
              </li>
              <li>
                <a href="!#">About us</a>
              </li>
              <li>
                <a href="!#">Gallery</a>
              </li>
              <li>
                <a href="!#">Contact us</a>
              </li>
            </ul>

            <div className={cx("action")}>
              <Button to="/login" header primary>
                <i className={cx("icon")}>
                  <FontAwesomeIcon icon={faRightToBracket} />
                </i>
                Login
              </Button>

              <Button to="/my-account" header primary>
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
      </header>
    </>
  );
}

export default NoBreadcrumb;

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
