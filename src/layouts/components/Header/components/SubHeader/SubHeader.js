import styles from "./SubHeader.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";
import { Link } from "react-router-dom";

import images from "~/assets/images";
import { Search, Cart } from "~/components";

const cx = classNames.bind(styles);

function SubHeader() {
  const cartRef = useRef();

  let cartQuantity = useSelector((state) => state.cart.count);

  if (cartQuantity.length === 0) cartQuantity = 0;

  const handleDisplay = () => {
    let closed = cartRef.current.getAttribute("closing");

    if (closed) {
      cartRef.current.setAttribute("display-non", "");
    }
  };

  const handleOpen = (e) => {
    cartRef.current.removeAttribute("display-non");

    cartRef.current.removeAttribute("closing");

    cartRef.current.setAttribute("opening", "");
  };

  const handleClose = (e) => {
    cartRef.current.removeAttribute("opening");

    cartRef.current.setAttribute("closing", true);

    cartRef.current.removeEventListener("animationend", () => {});
  };

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
          <div
            className={cx("cart-wrapper", "icon-wrapper")}
            onMouseMove={handleOpen}
            onMouseLeave={handleClose}
          >
            <Link to="/cart">
              <i className={cx("icon", "cart-icon", "ti-shopping-cart")}></i>
              <span className={cx("quantity")}>{cartQuantity}</span>
            </Link>

            <div
              className={cx("cart-component")}
              display-non="true"
              onMouseMove={(e) => {
                e.stopPropagation();
              }}
              ref={cartRef}
              onAnimationEnd={handleDisplay}
            >
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubHeader;
