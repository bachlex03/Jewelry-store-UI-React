import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";

import Category from "~/components/Category";

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <>
      <aside className={cx("sidebar")}>
        <h3 className={cx("heading")}>PRODUCT CATEGORIES</h3>
        <Category />
        <Category />
        <Category />

        <span className={cx("separate")}></span>
      </aside>
    </>
  );
}

export default Sidebar;
