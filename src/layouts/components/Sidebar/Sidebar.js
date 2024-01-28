import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";

import {
  Category,
  VariationItem,
  SideProduct,
  PriceFilter,
} from "~/components";

import * as siteServices from "~/apiServices/siteServices";

const cx = classNames.bind(style);

function Sidebar({ categories }) {
  console.log("Sidebar mounted");

  const [colorsFilter, setColorsFilter] = useState([]);
  const [sizesFilter, setSizesFilter] = useState([]);

  // fetching colors, sizes
  useEffect(() => {
    (async () => {
      const colors = await siteServices.getColors();
      const sizes = await siteServices.getSizes();

      setColorsFilter(colors);
      setSizesFilter(sizes);
    })();
  }, []);

  return (
    <aside className={cx("sidebar")}>
      <div>
        <h3 className={cx("heading")}>Product categories</h3>
        {categories.map((category, index) => {
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
        {colorsFilter.map((color, index) => {
          return <VariationItem name="colors" key={index} colorObj={color} />;
        })}

        <span className={cx("separate")}></span>
      </div>

      <div>
        <h3 className={cx("heading")}>Filter by size</h3>
        {sizesFilter.map((size, index) => {
          return <VariationItem name="sizes" key={index} colorObj={size} />;
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

export default memo(Sidebar);
