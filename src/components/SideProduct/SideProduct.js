import styles from "./SideProduct.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { Price } from "~/components";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function ServiceItem({ sale }) {
  return (
    <div className="flex align-center mt-20">
      <Link to="/details">
        <img src={images.product} alt="Product" className={cx("img")} />
      </Link>
      <div>
        <Link to="/details">
          <p className={cx("name")}>Rhombus Diamond Ring 18k White Gold</p>
        </Link>
        <div className="mt-10">
          <Price sale={sale} fs_15 />
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
