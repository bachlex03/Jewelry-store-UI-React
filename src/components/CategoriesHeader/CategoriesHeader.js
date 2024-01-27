import style from "./CategoriesHeader.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import * as categoryServices from "~/apiServices/categoryServices";
import { SubCategoryItem } from "~/components";
import images from "~/assets/images";

const cx = classNames.bind(style);

function CategoriesHeader({ handleClose }) {
  const [categories, setCategories] = useState([]);

  // fetch categories
  useEffect(() => {
    const fetchApi = async () => {
      const result = await categoryServices.categories();

      setCategories(result);
    };

    fetchApi();
  }, []);

  return (
    <div className={cx("categories-header")}>
      <div className="row">
        {categories.map((category, index) => {
          return (
            <div
              className="col l-4"
              onClick={() => {
                handleClose();
              }}
              key={index}
            >
              <SubCategoryItem category={category} />
            </div>
          );
        })}
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
