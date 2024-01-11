import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "~/redux/features/cart/cartSlice";

import images from "~/assets/images";
import { InputQuantity, Price, Button } from "~/components";

const cx = classNames.bind(styles);

function Cart() {
  const dispatch = useDispatch();

  const colors = ["Gold", "Silver", "Bronze"];
  const sizes = ["16.0", "17.0", "18.0", "19.0"];

  const cartItems = useSelector((state) => state.cart.values);

  let total = 0;

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
          {cartItems.map((item, index) => {
            const subtotal =
              item.quantity *
              (item.price - item.price * (item.promotion / 100));

            total += subtotal;

            return (
              <tr key={index}>
                <td className={cx("trash", "text-center")}>
                  <i
                    onClick={(e) => {
                      dispatch(remove(index));
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} className={cx("icon")} />
                  </i>
                </td>
                <td className={cx("product")}>
                  <Link to={`/products/${item.slug}`}>
                    <img src={images.product} alt="" />
                  </Link>
                  <div className={cx("body")}>
                    <Link
                      to={`/products/${item.slug}`}
                      className={cx("heading")}
                    >
                      {item.name}
                    </Link>
                    <div className={cx("variation-wrapper")}>
                      <div className={cx("variation-value")}>
                        Color: {colors[item.color]}
                      </div>
                      <div className={cx("variation-value")}>
                        Size: {sizes[item.size]}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={cx("price", "text-center")}>
                  <Price promotion={item.promotion} value={item.price} />
                </td>
                <td className={cx("quantity")}>
                  <InputQuantity
                    quantity={item.quantity}
                    updateCart={{ index, item }}
                  />
                </td>
                <td className={cx("subtotal", "text-center")}>
                  $ {subtotal.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="text-right mt-20">
        {/* <Button primary bold>
          UPDATE
        </Button> */}
      </div>

      <div className={cx("total-wrapper")}>
        <h3 className={cx("total-heading")}>CART TOTALS</h3>
        <div className={cx("total-field")}>
          <p className={cx("total-title")}>Subtotal</p>
          <strong>$ {total.toFixed(2)}</strong>
        </div>
        <div className={cx("total-field")}>
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
        <div className={cx("total-field")}>
          <p className={cx("total-title")}>TOTAL</p>
          <strong className={cx("total-price")}>
            $ {cartItems.length > 0 ? (total + 30).toFixed(2) : 0}
          </strong>
        </div>
        <p className="fs-12 mt-20 text-right">
          <Button to="/checkout" bold inherit small hover>
            PROCESS TO CHECKOUT
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Cart;
