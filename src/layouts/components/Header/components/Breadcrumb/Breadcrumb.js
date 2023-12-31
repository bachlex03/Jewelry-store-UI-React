import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Breadcrumb() {
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

export default Breadcrumb;
