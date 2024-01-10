import styles from "./Details.module.scss";
import classNames from "classnames/bind";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { add } from "~/redux/features/cart/cartSlice";

import images from "~/assets/images";
import { Price, Button, InputQuantity, Selection } from "~/components";
import * as productServices from "~/apiServices/productServices";
import * as productFilters from "~/utils/productFilter";

const cx = classNames.bind(styles);

function Details() {
  console.log("Details mounted");
  const [product, setProduct] = useState({});
  const [availableColors, setAvailableColors] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);

  const allVariantsRef = useRef([]);
  const variationValueRefs = useRef([]);
  const inputQuantity = useRef(1);

  const { param } = useParams();

  // const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.details(param);

      allVariantsRef.current = result;

      setProduct(result[0]);

      setAvailableColors(productFilters.filterVariants(result, "color"));
      setAvailableSizes(productFilters.filterVariants(result, "size"));
    };

    fetchApi();

    variationValueRefs.current[0] = React.createRef();
    variationValueRefs.current[1] = React.createRef();
  }, []);

  const handleClear = () => {
    variationValueRefs.current.forEach((selection) => {
      setAvailableColors(
        productFilters.filterVariants(allVariantsRef.current, "color")
      );
      setAvailableSizes(
        productFilters.filterVariants(allVariantsRef.current, "size")
      );

      selection.current.setValue("Choose your option");
    });
  };

  const handleAddToCart = () => {
    if (
      variationValueRefs.current[0].current.selectValue !==
        "Choose your option" &&
      variationValueRefs.current[1].current.selectValue !== "Choose your option"
    ) {
      const data = {
        name: product.name,
        price: product.price,
        color: availableColors[0],
        size: availableSizes[0],
        slug: product.slug,
        quantity: inputQuantity.current.inputQuantity,
      };

      console.log(data);

      dispatch(add(1));
    }
  };

  return (
    <div className="section-1200">
      <div className={cx("wrapper")}>
        {product.promotion ? (
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
          <Price value={product.price} promotion={product.promotion} />
          <p className={cx("desc")}>{product.desc}</p>

          <Selection
            name="color"
            ref={variationValueRefs.current[0]}
            othersVariation="size"
            products={allVariantsRef.current}
            availableVariants={availableColors}
            defaultArr={["Gold", "Silver", "Bronze"]}
            setAvailableVariants={setAvailableSizes}
          />

          <Selection
            name="size"
            ref={variationValueRefs.current[1]}
            othersVariation="color"
            products={allVariantsRef.current}
            availableVariants={availableSizes}
            defaultArr={["16.0", "17.0", "18.0", "19.0"]}
            setAvailableVariants={setAvailableColors}
          />

          <div className="text-center">
            <Button hover bold mini onClick={handleClear}>
              Clear
            </Button>
          </div>

          <div className={cx("add-to-cart")}>
            <div className="mr-20">
              <InputQuantity ref={inputQuantity} />
            </div>
            <div>
              <Button hover bold onClick={handleAddToCart}>
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
