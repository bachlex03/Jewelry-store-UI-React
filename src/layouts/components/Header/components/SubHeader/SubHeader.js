import styles from "./SubHeader.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import images from "~/assets/images";
import { Search, Cart } from "~/components";

const cx = classNames.bind(styles);

function SubHeader() {
  const cartQuantity = useSelector((state) => state.cart.count);

  return (
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
          <div className={cx("search-component")}>
            <Search />
          </div>
          <div className={cx("icon-wrapper")}>
            <i className={cx("icon", "ti-search")}></i>
          </div>
          <div className={cx("icon-wrapper")}>
            <i className={cx("icon")}>
              <FontAwesomeIcon icon={faHeart} />
            </i>
          </div>
          {/* Cart */}
          <div className={cx("cart-wrapper", "icon-wrapper")}>
            <i className={cx("icon", "cart-icon", "ti-shopping-cart")}></i>
            <span className={cx("quantity")}>{cartQuantity}</span>

            <div className={cx("cart-component")}>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubHeader;
