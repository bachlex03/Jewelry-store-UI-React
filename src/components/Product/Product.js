import style from "./Product.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import images from "~/assets/images";

import Button from "~/components/Button";
import Price from "~/components/Price";

import { Fragment } from "react";

const cx = classNames.bind(style);

function Product({ sale, children }) {
  return (
    <>
      <div className={cx("product-item")}>
        <div className={cx("product-wrapper")}>
          {sale ? (
            <img src={images.sale} className={cx("sale-tag")} />
          ) : (
            Fragment
          )}
          <Link>
            <img src={images.product} alt="product" className={cx("img")} />
          </Link>
          <span className={cx("label")}>Bands</span>
          <h3 className={cx("heading")}>Veronece 18K Clad 10 Diamond Cut</h3>

          <Price sale={sale} pos_shop />
          <div className={cx("buy-btn-wrapper")}>
            <Button to={"/product/details"} hover>
              Select options
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
