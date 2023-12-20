import style from "./SiteHeader.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import images from "~/assets/images";
const cx = classNames.bind(style);

function SiteSubHeader() {
  return (
    <>
      <section className={cx("sub-header")}>
        <div className="flex justify-between align-center section-1100">
          <div className={cx("left-block")}>
            <div className={cx("info")}>
              <i className={cx("icon", "ti-location-pin")}></i>
              <span>London</span>
            </div>
            <div className={cx("info")}>
              <i className={cx("icon", "ti-mobile")}></i>
              <span>+1 (123) 456 78 90</span>
            </div>
          </div>
          <div className={cx("center-block")}>
            <img src={images.logo} alt="logo" className={cx("logo")} />
          </div>
          <div className={cx("right-block")}>
            <div>
              <input
                type="text"
                placeholder="Search products..."
                className={cx("search")}
              />
            </div>
            <div>
              <i className={cx("icon", "ti-search")}></i>
            </div>
            <div>
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faHeart} />
              </i>
            </div>
            <div className="relative">
              <i className={cx("icon", "ti-shopping-cart", "cart")}></i>
              <span className={cx("quantity")}>0</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SiteSubHeader;
