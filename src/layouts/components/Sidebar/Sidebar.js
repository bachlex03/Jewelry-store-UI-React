import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect, memo, forwardRef } from "react";

import {
  Category,
  VariationItem,
  SideProduct,
  PriceFilter,
} from "~/components";

import * as categoriesService from "~/apiServices/categoryServices";
// import * as siteServices from "~/apiServices/sitesService";

const cx = classNames.bind(style);

function Sidebar() {
  console.log("Sidebar mounted");

  // const [colorFilter, setColorFilter] = useState([false, false, false]);
  // const [sizesFilter, setSizesFilter] = useState([]);
  const [categoriesApi, setCategoriesApi] = useState([]);

  // fetch categories
  useEffect(() => {
    const fetchApi = async () => {
      const result = await categoriesService.categories();

      setCategoriesApi(result);
    };

    fetchApi();
  }, []);

  // useEffect(() => {
  //   const fetchCategoriesApi = async () => {
  //     const result = await categoriesService.categories();

  //     // setCategoriesApi(result);
  //   };

  //   const fetchSitesApi = async () => {
  //     const sizes = await siteServices.getSizes();

  //     // setSizesFilter(sizes);
  //   };

  //   fetchSitesApi();
  //   fetchCategoriesApi();
  // }, []);

  return (
    <aside className={cx("sidebar")}>
      <div>
        <h3 className={cx("heading")}>Product categories</h3>
        {categoriesApi.map((category, index) => {
          return <Category category={category} key={index} />;
        })}

        <span className={cx("separate")}></span>
      </div>

      <div>
        <h3 className={cx("heading")}>Filter by price</h3>

        <PriceFilter />

        <span className={cx("separate")}></span>
      </div>

      <div>
        <h3 className={cx("heading")}>Filter by color</h3>
        {/* {colors.map((color, index) => {
          return (
            <VariationItem
              setColorFilter={setColorFilter}
              name={color}
              key={index}
              index={index}
              initCheck={colorFilter[index]}
            />
          );
        })} */}

        <span className={cx("separate")}></span>
      </div>

      <div>
        <h3 className={cx("heading")}>Filter by color</h3>
        {/* {sizesFilter.map((size, index) => {
          return <VariationItem variation={size} />;
        })} */}

        <span className={cx("separate")}></span>
      </div>

      <div>
        <h3 className={cx("heading")}>Best selling products</h3>
        <SideProduct name="Product" price sale />
        <SideProduct name="Product" price />
        <SideProduct name="Product" price sale />
        <SideProduct name="Product" price />

        <span className={cx("separate")}></span>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
