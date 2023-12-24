import style from "./Checkout.module.scss";
import classNames from "classnames/bind";

import { Input, Button } from "~/components";
const cx = classNames.bind(style);

function Checkout() {
  return (
    <div className="section-1200">
      <div className={cx("checkout-wrapper")}>
        <div className={cx("info-wrapper")}>
          <h3 className={cx("heading")}>Billing details</h3>
          <div className="flex">
            <div className="w-100 pl-10 pr-10">
              <Input
                label="First name"
                placeholder="First name..."
                isRequired
                required
              />
            </div>
            <div className="w-100 pl-10 pr-10">
              <Input
                label="Last name"
                placeholder="Last name..."
                isRequired
                required
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
              label="Street address"
              placeholder="Street address..."
              isRequired
              required
            />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input
              label="Phone number"
              placeholder="(+84)"
              isRequired
              required
            />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input
              label="Email address"
              placeholder="email@gmail.com"
              type="email"
              isRequired
              required
            />
          </div>
          <div className="w-100 pl-10 pr-10 mt-10">
            <Input label="Note" placeholder="note..." textarea />
          </div>
          <div className="mt-20 text-right">
            <Button bold hover>
              UPDATE INFORMATION
            </Button>
          </div>
        </div>
        <div className={cx("invoice-wrapper")}>
          <h3 className={cx("heading")}>Your orders</h3>
          <div className={cx("invoice-body")}>
            <table className={cx("table")}>
              <thead className={cx("thead")}>
                <th className={cx("product")}>Product</th>
                <th className={cx("subtotal")}>Subtotal</th>
              </thead>
              <tbody>
                <tr>
                  <td className={cx("product")}>
                    <p className={cx("product-heading")}>
                      14K Gold 9" Diamond Ankle Bracelet
                    </p>
                    <div className="flex justify-between align-center">
                      <span>1 × $ 424.00</span>
                      <div>
                        <p className={cx("variation-value")}>Color: Gold</p>
                        <p className={cx("variation-value")}>Size: 16.0</p>
                      </div>
                    </div>
                  </td>
                  <td className={cx("product-subtotal")}>$ 424.00</td>
                </tr>
              </tbody>
            </table>
            <div className={cx("total-field")}>
              <p className={cx("total-title")}>Subtotal</p>
              <p>$ 1034.00</p>
            </div>
            <div className={cx("total-field")}>
              <p className={cx("total-title")}>Shipping</p>
              <p>Flat rate: $ 30.00</p>
            </div>
            <div className={cx("total-field")}>
              <p className={cx("total-title")}>Total</p>
              <strong>$ 1034.00</strong>
            </div>

            {/* Payment type */}
            <div className={cx("payment-type")}>
              <ul className={cx("payment-list")}>
                <li>
                  <input
                    type="radio"
                    name="payment-radio"
                    id="bank"
                    checked=""
                  />
                  <label for="bank">Direct bank transfer</label>
                  <p className={cx("payment-box", "hidden")}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </li>
                <li>
                  <input type="radio" name="payment-radio" id="on-delivery" />
                  <label for="on-delivery">Cash on delivery</label>
                  <p className={cx("payment-box", "hidden")}>
                    Pay with cash upon delivery.
                  </p>
                </li>
                <li>
                  <input type="radio" name="payment-radio" id="paypal" />
                  <label for="paypal">PayPal</label>
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
                  your experience throughout this website, and for other
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
                <Button bold hover>
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
