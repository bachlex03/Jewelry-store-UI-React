import styles from "./Details.module.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";

import images from "~/assets/images";
import { Price, Button, InputQuantity, Selection } from "~/components";
import * as productServices from "~/apiServices/productServices";
import * as productFilters from "~/utils/productFilter";

const cx = classNames.bind(styles);

function Details() {
  const [product, setProduct] = useState({});
  const [availableColors, setAvailableColors] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);

  const allVariantsRef = useRef([]);

  const { param } = useParams();

  let isSale = true;

  const val = useLocation();

  // console.log(val);

  // console.log(new URLSearchParams(val.search).get("sale"));

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.details(param);

      allVariantsRef.current = result;

      setProduct(result[0]);

      setAvailableColors(productFilters.filterVariants(result, "color"));
      setAvailableSizes(productFilters.filterVariants(result, "size"));
    };

    fetchApi();
  }, []);

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
          <h3 className={cx("heading")}>{product.name}</h3>
          <Price sale />
          <p className={cx("desc")}>{product.desc}</p>

          <Selection
            name="Color"
            availableVariants={availableColors}
            defaultArr={["Gold", "Silver", "Bronze"]}
          />

          <Selection
            name="Size"
            availableVariants={availableSizes}
            defaultArr={["16.0", "17.0", "18.0", "19.0"]}
          />

          <div className={cx("add-to-cart")}>
            <div className="mr-20">
              <InputQuantity />
            </div>
            <div>
              <Button hover bold>
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
