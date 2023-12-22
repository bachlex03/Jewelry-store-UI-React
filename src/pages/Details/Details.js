import style from "./Details.module.scss";
import classNames from "classnames/bind";

import images from "~/assets/images";

import Price from "~/components/Price";
import Button from "~/components/Button";
import InputQuantity from "~/components/InputQuantity";
import Selection from "~/components/Selection";

import { Fragment } from "react";

const cx = classNames.bind(style);

function Details() {
  let isSale = true;

  return (
    <div className="section-1200">
      <div className={cx("wrapper")}>
        {isSale ? (
          <img src={images.sale} alt="sale" className={cx("sale-tag")} />
        ) : (
          Fragment
        )}
        <div className={cx("img-wrapper")}>
          <img src={images.product} alt="" className={cx("default-img")} />
          <div className={cx("img-list")}>
            <div className={cx("img-item")}>
              <img
                src={images.product}
                alt="sub-product"
                className={cx("sub-img")}
              />
            </div>

            <div className={cx("img-item")}>
              <img
                src={images.subProduct1}
                alt="sub-product"
                className={cx("sub-img")}
              />
            </div>

            <div className={cx("img-item")}>
              <img
                src={images.subProduct2}
                alt="sub-product"
                className={cx("sub-img")}
              />
            </div>
          </div>
        </div>

        <div className={cx("body")}>
          <h3 className={cx("heading")}>Veronece 18K Clad 10 Diamond Cut</h3>
          <Price sale />
          <p className={cx("desc")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut
            porro, a iure itaque iusto repudiandae laborum veritatis. Voluptas
            beatae ipsum ratione! Veritatis repudiandae minima vero magnam alias
            omnis sit?
          </p>

          <Selection name="Color" />

          <Selection name="Size" />

          <div className={cx("add-to-cart")}>
            <div className="mr-20">
              <InputQuantity />
            </div>
            <div>
              <Button hover>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
