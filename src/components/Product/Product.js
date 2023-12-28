import style from "./Product.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import images from "~/assets/images";
import { Button, Price } from "~/components";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Product({ heading, sale }) {
  const [wishlist, setWishlist] = useState(false);

  const handleWishlist = () => {
    setWishlist(wishlist ? false : true);
  };

  return (
    <>
      <div className={cx("product-item")}>
        <div className={cx("product-wrapper")}>
          {sale ? (
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

          <Link to="/details">
            <img src={images.product} alt="product" className={cx("img")} />
          </Link>
          <span className={cx("label")}>Bands</span>
          <h3 className={cx("heading")}>{heading}</h3>

          <div className={cx("price-wrapper")}>
            <Price sale={sale} pos__shop />
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
