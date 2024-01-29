import style from "./Checkout.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth } from "~/hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "~/components";
const cx = classNames.bind(style);

const colors = ["Gold", "Silver", "Bronze"];
const sizes = ["16.0", "17.0", "18.0", "19.0"];

function Checkout() {
  const cartItems = useSelector((state) => state.cart.values);
  const cartCount = useSelector((state) => state.cart.count);
  const navigate = useNavigate();

  const auth = useAuth();
  let user = auth.user;

  const [form, setForm] = useState({
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    addressLine: user ? user.addressLine : "",
    phoneNumber: user ? user.phoneNumber : "",
    email: user ? user.email : "",
    note: "",
  });

  const { firstName, lastName, addressLine, phoneNumber, email, note } = form;

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "note") {
      window.localStorage.setItem("note", value);
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    window.localStorage.removeItem("note");
  };

  const classes = {
    hover: cartCount,
    disable: !cartCount,
  };

  // save state typed note
  useEffect(() => {
    if (window.localStorage.getItem("note")) {
      setForm((prev) => ({
        ...prev,
        note: window.localStorage.getItem("note"),
      }));
    }
  }, []);

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  let total = 0;

  return (
    <div className="section-1200">
      <div className={cx("checkout-wrapper")}>
        <div className={cx("info-wrapper")}>
          <h3 className={cx("heading")}>Billing details</h3>
          <div className="flex">
            <div className="w-100 pl-10 pr-10">
              <Input
                name="firstName"
                label="First name"
                placeholder="First name..."
                isRequired
                required
                value={
                  firstName ? firstName : user ? user.firstName : firstName
                }
                onChange={handleForm}
              />
            </div>
            <div className="w-100 pl-10 pr-10">
              <Input
                name="lastName"
                label="Last name"
                placeholder="Last name..."
                isRequired
                required
                value={lastName ? lastName : user ? user.lastName : lastName}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input selection label="Country" />
          </div>
          <div className="w-100 pl-10 pr-10 mt-20">
            <Input selection label="Town / City" />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input
              name="addressLine"
              label="Street address"
              placeholder="Street address..."
              isRequired
              required
              value={
                addressLine
                  ? addressLine
                  : user
                  ? user.addressLine
                  : addressLine
              }
              onChange={handleForm}
            />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input
              name="phoneNumber"
              label="Phone number"
              placeholder="(+84)"
              isRequired
              required
              value={
                phoneNumber
                  ? phoneNumber
                  : user
                  ? user.phoneNumber
                  : phoneNumber
              }
              onChange={handleForm}
            />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input
              name="email"
              label="Email address"
              placeholder="email@gmail.com"
              type="email"
              isRequired
              required
              notEditable
              value={email ? email : user ? user.email : email}
              onChange={handleForm}
            />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input
              name="note"
              label="Note"
              placeholder="note..."
              textarea
              value={note}
              onChange={handleForm}
            />
          </div>
          <div className="mt-20 text-right">
            <Button bold hover active>
              UPDATE INFORMATION
            </Button>
          </div>
        </div>
        <div className={cx("invoice-wrapper")}>
          <h3 className={cx("heading")}>Your orders</h3>
          <div className={cx("invoice-body")}>
            <table className={cx("table")}>
              <thead className={cx("thead")}>
                <tr>
                  <th className={cx("product")}>Product</th>
                  <th className={cx("subtotal")}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const subtotal =
                    item.quantity *
                    (item.price * ((100 - item.promotion) / 100));

                  total += subtotal;

                  const salePrice = item.price * ((100 - item.promotion) / 100);

                  return (
                    <tr key={index}>
                      <td className={cx("product")}>
                        <p className={cx("product-heading")}>{item.name}</p>
                        <div className="flex justify-between align-center">
                          <span>
                            {item.quantity} × $ {salePrice.toFixed(2)}
                          </span>
                          <div>
                            <p className={cx("variation-value")}>
                              Color: {colors[item.color]}
                            </p>
                            <p className={cx("variation-value")}>
                              Size: {sizes[item.size]}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className={cx("product-subtotal")}>
                        $ {subtotal.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={cx("total-field")}>
              <p className={cx("total-title")}>Subtotal</p>
              <p>$ {total.toFixed(2)}</p>
            </div>
            <div className={cx("total-field")}>
              <p className={cx("total-title")}>Shipping</p>
              <p>Flat rate: $ 30.00</p>
            </div>
            <div className={cx("total-field")}>
              <p className={cx("total-title")}>Total</p>
              <strong>
                $ {cartItems.length > 0 ? (total + 30).toFixed(2) : 0}
              </strong>
            </div>

            {/* Payment type */}
            <div className={cx("payment-type")}>
              <ul className={cx("payment-list")}>
                <li>
                  <input type="radio" name="payment-radio" id="bank" />
                  <label htmlFor="bank">Direct bank transfer</label>
                  <p className={cx("payment-box", "hidden")}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </li>
                <li>
                  <input type="radio" name="payment-radio" id="on-delivery" />
                  <label htmlFor="on-delivery">Cash on delivery</label>
                  <p className={cx("payment-box", "hidden")}>
                    Pay with cash upon delivery.
                  </p>
                </li>
                <li>
                  <input type="radio" name="payment-radio" id="paypal" />
                  <label htmlFor="paypal">PayPal</label>
                  <img
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-small.png"
                    alt=""
                  />
                  <p className={cx("payment-box", "hidden")}>
                    Pay via PayPal; you can pay with your credit card if you
                    don?t have a PayPal account.
                  </p>
                </li>
              </ul>

              <div>
                <p className={cx("policy", " mt-15")}>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and htmlFor other
                  purposes described in our&nbsp;
                  <Button to="" styleLink>
                    privacy policy
                  </Button>
                </p>

                <div className={cx("term")}>
                  <div className={cx("term-inner", "mt-20")}>
                    <input type="checkbox" name="" id="" />
                    <p>I have read and agree to the website</p>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <Button bold {...classes} onClick={(e) => handleCheckout}>
                  PLACE ORDER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
