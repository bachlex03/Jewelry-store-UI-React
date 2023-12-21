import style from "./Footer.module.scss";
import classNames from "classnames/bind";

import FooterList from "~/components/FooterList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(style);

function Footer() {
  return (
    <>
      <div className={cx("wrapper", "flex")}>
        <div className="flex justify-between align-center section-1200">
          <div className="grid wide">
            <div className="row">
              <div className="col l-3">
                <div className="flex justify-center align-center h-100">
                  <div className="text-center">
                    <h3 className={cx("branch-heading")}>DIAMOND CITY</h3>
                    <span className={cx("sub-heading")}>JEWELRY BOUTIQUE</span>
                  </div>
                </div>
              </div>
              <div className="col l-9">
                <div className="row">
                  <div className="col l-3">
                    <FooterList />
                  </div>
                  <div className="col l-3">
                    <FooterList />
                  </div>
                  <div className="col l-3">
                    <FooterList />
                  </div>
                  <div className="col l-3">
                    <FooterList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("sub-footer", "flex")}>
        <div className="flex justify-between align-center section-1200">
          <ul className={cx("payment-list")}>
            <li>
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faCcVisa} />
              </i>
            </li>
            <li>
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faCcMastercard} />
              </i>
            </li>
            <li>
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faCcPaypal} />
              </i>
            </li>
            <li>
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faCcAmex} />
              </i>
            </li>
          </ul>

          <ul className={cx("footer-pages")}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Checkout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
