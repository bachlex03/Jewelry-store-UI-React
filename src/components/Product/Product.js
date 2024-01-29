import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "~/redux/features/wishlist/wishlistSlice";

import images from "~/assets/images";
import { Button, Price } from "~/components";

const cx = classNames.bind(styles);

function Product({ product, soldOut }) {
  const [wishlist, setWishlist] = useState(false);
  const productRef = useRef();

  const wishlistProducts = useSelector((state) => state.wishlist.values);

  const dispatch = useDispatch();

  let invalid = product ? false : true;

  if (soldOut) {
    invalid = true;
  }

  const classes = {
    invalid,
    soldOut,
  };

  const handleWishlist = () => {
    setWishlist(wishlist ? false : true);

    if (wishlist) {
      dispatch(remove(product));
    } else {
      dispatch(add(product));
    }
  };

  useEffect(() => {
    if (product) {
      const isWishlist = wishlistProducts.some((p) => p._id === product._id);

      setWishlist(isWishlist);
    }
  }, []);

  useEffect(() => {
    const links = productRef.current.querySelectorAll("a[invalid='true']");

    const arrLinks = Array.from(links);

    arrLinks.forEach((link) => {
      link.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);

  return (
    <div className={cx("product-item")} ref={productRef}>
      <div className={cx("product-wrapper")}>
        {product && product.promotion !== 0 ? (
          <img src={images.sale} className={cx("sale-tag")} />
        ) : (
          Fragment
        )}
        <i className={cx("icon")} onClick={handleWishlist}>
          {wishlist ? (
            <FontAwesomeIcon icon={faHeartSolid} />
          ) : (
            <FontAwesomeIcon icon={faHeartRegular} />
          )}
        </i>

        <Link
          to={{
            pathname: `/products/${product ? product.slug : "demo"}`,
          }}
          invalid={invalid ? "true" : "false"}
        >
          <div className={cx("img-wrapper", classes)}>
            <img
              src={product ? product.imageUrls[0] : images.product}
              alt="product"
              className={cx("img")}
            ></img>
          </div>
        </Link>
        <div className={cx("product-body", classes)}>
          <span className={cx("label")}>
            {product ? product.category.replace("-", " ") : "demo"}
          </span>
          <Link
            to={{
              pathname: `/products/${product ? product.slug : "demo"}`,
            }}
            invalid={invalid ? "true" : "false"}
          >
            <h3 className={cx("heading")}>{product ? product.name : "demo"}</h3>
          </Link>

          <div className={cx("price-wrapper")}>
            <Price
              promotion={product ? product.promotion : 0}
              pos__shop
              value={product ? product.price : 100}
            />
          </div>
          <div className={cx("buy-btn-wrapper")}>
            {!invalid ? (
              <Button
                to={{
                  pathname: `/products/${product ? product.slug : "demo-slug"}`,
                  state: "123",
                }}
                hover
              >
                Select options
              </Button>
            ) : (
              Fragment
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
