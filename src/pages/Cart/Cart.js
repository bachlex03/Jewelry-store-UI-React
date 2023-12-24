import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import images from "~/assets/images";
import { InputQuantity, Price, Button } from "~/components";

const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className="section-1200">
      <table className={cx("table")}>
        <thead className={cx("thead")}>
          <tr>
            <th className={cx("trash")}>&nbsp;</th>
            <th className={cx("product")}>Product</th>
            <th className={cx("price")}>Price</th>
            <th className={cx("quantity")}>Quantity</th>
            <th className={cx("subtotal")}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cx("trash", "text-center")}>
              <FontAwesomeIcon icon={faTrashCan} className={cx("icon")} />
            </td>
            <td className={cx("product")}>
              <img src={images.product} alt="" />
              <div className={cx("body")}>
                <Link to="" className={cx("heading")}>
                  14K Gold 9" Diamond Ankle Bracelet
                </Link>
                <div className={cx("variation-wrapper")}>
                  <div className={cx("variation-value")}>Color: Gold</div>
                  <div className={cx("variation-value")}>Size: 16.0</div>
                </div>
              </div>
            </td>
            <td className={cx("price", "text-center")}>
              <Price sale />
            </td>
            <td className={cx("quantity")}>
              <InputQuantity />
            </td>
            <td className={cx("subtotal", "text-center")}>$ 424.00</td>
          </tr>

          <tr>
            <td className={cx("trash", "text-center")}>
              <FontAwesomeIcon icon={faTrashCan} className={cx("icon")} />
            </td>
            <td className={cx("product")}>
              <img src={images.product} alt="" />
              <div className={cx("body")}>
                <Link to="" className={cx("heading")}>
                  14K Gold 9" Diamond Ankle Bracelet
                </Link>
                <div className={cx("variation-wrapper")}>
                  <div className={cx("variation-value")}>Color: Gold</div>
                  <div className={cx("variation-value")}>Size: 16.0</div>
                </div>
              </div>
            </td>
            <td className={cx("price", "text-center")}>
              <Price />
            </td>
            <td className={cx("quantity")}>
              <InputQuantity />
            </td>
            <td className={cx("subtotal", "text-center")}>$ 424.00</td>
          </tr>
        </tbody>
      </table>

      <div className="text-right mt-20">
        <Button primary bold>
          UPDATE
        </Button>
      </div>

      <div className={cx("total-wrapper")}>
        <h3 className={cx("total-heading")}>CART TOTALS</h3>
        <div className={cx("total-item")}>
          <p className={cx("total-title")}>Subtotal</p>
          <strong>$ 1034.00</strong>
        </div>
        <div className={cx("total-item")}>
          <p className={cx("total-title")}>SHIPPING</p>
          <div className="text-right">
            <p>
              Flat rate: <strong>$ 30.00</strong>
            </p>
            <p>
              Shipping to: <strong>Vietnam</strong>
            </p>
            <Button to="/checkout" styleLink>
              Change address
            </Button>
          </div>
        </div>
        <div className={cx("total-item")}>
          <p className={cx("total-title")}>TOTAL</p>
          <strong className={cx("total-price")}>$ 0.00</strong>
        </div>
        <p className="fs-12 mt-20 text-right">
          <Button bold inherit small hover>
            PROCESS TO CHECKOUT
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Cart;
