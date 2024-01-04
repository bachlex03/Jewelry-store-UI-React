import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect, useContext } from "react";

import {
  Category,
  VariationItem,
  SideProduct,
  PriceFilter,
} from "~/components";
import * as categoriesService from "~/apiServices/categoriesService";

const cx = classNames.bind(style);

const colors = ["Gold", "Silver", "Bronze"];
// const sizes = ["16", "17", "18", "19"];

function Sidebar() {
  const [colorFilter, setColorFilter] = useState([false, false, false]);
  const [categoriesApi, setCategoriesApi] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await categoriesService.categories();

      setCategoriesApi(result);
    };

    fetchApi();
  }, []);

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
        {colors.map((color, index) => {
          return (
            <VariationItem
              setColorFilter={setColorFilter}
              name={color}
              key={index}
              index={index}
              initCheck={colorFilter[index]}
            />
          );
        })}

        <span className={cx("separate")}></span>
      </div>

      <div>
        <h3 className={cx("heading")}>Filter by color</h3>
        {colors.map((color, index) => {
          return (
            <VariationItem
              setColorFilter={setColorFilter}
              name={color}
              key={index}
              index={index}
              initCheck={colorFilter[index]}
            />
          );
        })}

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

export default Sidebar;
