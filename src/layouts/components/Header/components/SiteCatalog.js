import style from "../SiteHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function SiteCatalog() {
  return (
    <>
      <section className={cx("catalog", "flex")}>
        <div className="flex justify-between align-center section-1100">
          <ul className={cx("catalog__list")}>
            <li>
              <Link to="/home" className={cx("item")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={cx("item")}>
                Shop
                <FontAwesomeIcon icon={faChevronDown} className={cx("icon")} />
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                New Collection
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Sale
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Shop
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Men
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Watches
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Pages
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Blog
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                About
              </Link>
            </li>
            <li>
              <Link to={""} className={cx("item")}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SiteCatalog;
