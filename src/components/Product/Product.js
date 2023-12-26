import style from "./Product.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import images from "~/assets/images";

import Button from "~/components/Button";
import Price from "~/components/Price";

import { Fragment } from "react";

const cx = classNames.bind(style);

function Product({ heading, sale }) {
  return (
    <>
      <div className={cx("product-item")}>
        <div className={cx("product-wrapper")}>
          {sale ? (
            <img src={images.sale} className={cx("sale-tag")} />
          ) : (
            Fragment
          )}
          <Link to="/details">
            <img src={images.product} alt="product" className={cx("img")} />
          </Link>
          <span className={cx("label")}>Bands</span>
          <h3 className={cx("heading")}>{heading}</h3>

          <div className={cx("price-wrapper")}>
            <Price sale={sale} pos_shop />
          </div>
          <div className={cx("buy-btn-wrapper")}>
            <Button to={"/details"} hover>
              Select options
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
