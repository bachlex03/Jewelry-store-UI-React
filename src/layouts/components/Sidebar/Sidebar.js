import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

import { Category, VariationItem, SideProduct } from "~/components";

const cx = classNames.bind(style);

const categories = [
  {
    parentName: "parent 1",
    children: [
      {
        name: "child 1",
        url: "/",
      },
      {
        name: "child 2",
        url: "/",
      },
    ],
  },
  {
    parentName: "parent 2",
    children: [
      {
        name: "child 1",
        url: "/",
      },
      {
        name: "child 2",
        url: "/",
      },
      {
        name: "child 3",
        url: "/",
      },
    ],
  },
];

const colors = ["Gold", "Silver", "Bronze"];
const sizes = ["16", "17", "18", "19"];

let i = 0;

function Sidebar() {
  const [colorFilter, setColorFilter] = useState([false, false, false]);

  // console.log("re-render");
  // console.log(colorFilter);

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
        <SideProduct name="Product" price />
        <SideProduct name="Product" price sale />
        <SideProduct name="Product" price />
        <SideProduct name="Product" price />

        <span className={cx("separate")}></span>
      </div>
    </aside>
  );
}

export default Sidebar;
