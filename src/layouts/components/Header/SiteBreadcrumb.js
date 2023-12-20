import style from "./SiteHeader.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function SiteBreadcrumb() {
  return (
    <section className={cx("breadcrumb")}>
      <div>
        <ul className={cx("breadcrumb__list")}>
          <li>Home&nbsp; {">"} &nbsp;</li>
          <li>Bracelets&nbsp; {">"} &nbsp;</li>
          <li className={cx("active")}>Shop &nbsp;</li>
        </ul>
        <h3 className={cx("current")}>Shop</h3>
      </div>
    </section>
  );
}

export default SiteBreadcrumb;
