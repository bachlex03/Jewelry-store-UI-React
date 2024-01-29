import styles from "./SideProduct.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { Price } from "~/components";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function SideProduct({ product, sale }) {
  return (
    <div className="flex align-center mt-20">
      <Link
        to={{
          pathname: `/products/${product ? product.slug : "demo"}`,
        }}
      >
        <img
          src={product ? product.imageUrls[0] : images.product}
          alt="Product"
          className={cx("img")}
        />
      </Link>
      <div>
        <Link
          to={{
            pathname: `/products/${product ? product.slug : "demo"}`,
          }}
        >
          <p className={cx("name")}>
            {product ? product.name : "Not available"}
          </p>
        </Link>
        <div className="mt-10">
          <Price
            promotion={product && product.promotion}
            value={product && product.price}
            sale={sale}
            fs_15
          />
        </div>
      </div>
    </div>
  );
}

export default SideProduct;
