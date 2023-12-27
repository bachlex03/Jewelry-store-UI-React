import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";

import Category from "~/components/Category";

const cx = classNames.bind(style);

function Sidebar() {
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

  return (
    <>
      <aside className={cx("sidebar")}>
        <h3 className={cx("heading")}>PRODUCT CATEGORIES</h3>
        {categories.map((category, index) => {
          return <Category category={category} key={index} />;
        })}

        <span className={cx("separate")}></span>
      </aside>
    </>
  );
}

export default Sidebar;
