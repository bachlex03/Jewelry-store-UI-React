import styles from "./SubHeader.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import images from "~/assets/images";
import { Button, Price, Search } from "~/components";

const cx = classNames.bind(styles);

function SubHeader() {
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
          <div className={cx("cart-wrapper", "icon-wrapper")}>
            <i className={cx("icon", "cart-icon", "ti-shopping-cart")}></i>
            <span className={cx("quantity")}>0</span>

            {/* Cart */}
            <div className={cx("cart")}>
              <h3 className={cx("cart-heading")}>Cart</h3>
              <div>
                <div className={cx("cart-item")}>
                  <div className={cx("item-info")}>
                    <img
                      src={images.product}
                      alt=""
                      className={cx("item-img")}
                    />
                    <div>
                      <h4 className={cx("item-heading")}>
                        14K Gold 9" Diamond Ankle Bracelet
                      </h4>
                      <div className={cx("variation-wrapper")}>
                        <div>Color: Gold</div>
                        <div>Size: 16.0</div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("item-price")}>
                    <div className={cx("quantity-price")}>
                      <span className={cx("item-quantity")}>1 ×</span>
                      <Price sale />
                    </div>
                    <span className={cx("sub-total")}>$ 424.00</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-20">
                <span>Total: </span>
                <span className={cx("total-price")}>$ 1224.00</span>
              </div>
              <div className="mt-20 text-center">
                <Button to="/cart" large hover>
                  VIEW CART
                </Button>
              </div>
              <div className="mt-10 text-center">
                <Button to="/checkout" large hover>
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubHeader;
