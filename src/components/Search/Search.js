import style from "./Search.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import images from "~/assets/images";
import { Price } from "~/components";

const cx = classNames.bind(style);

function Search() {
  return (
    <div className={cx("wrapper")}>
      <input
        type="text"
        placeholder="Search products..."
        className={cx("search-input")}
      />
      <ul className={cx("list")}>
        <li>
          <Link to="/details" className="flex align-center">
            <img src={images.product} alt="product-img" className={cx("img")} />
            <div>
              <h4 className={cx("name")}>Veronece 18K Clad 10 Diamond Cut</h4>
              <div className="flex justify-between align-center mt-10">
                <span className={cx("category")}>Band</span>
                <Price fs_15 />
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link to="/details" className="flex align-center">
            <img src={images.product} alt="product-img" className={cx("img")} />
            <div>
              <h4 className={cx("name")}>Veronece 18K Clad 10 Diamond Cut</h4>
              <div className="flex justify-between align-center mt-10">
                <span className={cx("category")}>Band</span>
                <Price sale old_new_price />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Search;
