import style from "./CategoriesHeader.module.scss";
import classNames from "classnames/bind";

import { SubCategoryItem } from "~/components";
import images from "~/assets/images";

const cx = classNames.bind(style);

function CategoriesHeader() {
  return (
    <div className={cx("categories-header")}>
      <div className="row">
        <div className="col l-4">
          <SubCategoryItem />
        </div>
        <div className="col l-4">
          <SubCategoryItem />
        </div>
        <div className="col l-4">
          <SubCategoryItem />
        </div>
        <div className="col l-4">
          <SubCategoryItem />
        </div>
        <div className="col l-4">
          <SubCategoryItem />
        </div>
        <div className="col l-4">
          <SubCategoryItem />
        </div>
      </div>
      <div className={cx("right-block")}>
        <img src={images.subCategories} alt="" className={cx("img")} />
      </div>
    </div>
  );
}

export default CategoriesHeader;
