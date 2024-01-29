import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";

import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Breadcrumb() {
  const location = useLocation();

  let currentPath = location.pathname.split("/");

  console.log(location.pathname);

  console.log(currentPath);

  return (
    <section className={cx("breadcrumb")}>
      <div>
        <ul className={cx("breadcrumb__list")}>
          {currentPath.map((path, index) => {
            return <li key={index}>&nbsp;{path ? path : "Home"}&nbsp;</li>;
          })}
        </ul>
        <h3 className={cx("current")}>{currentPath[currentPath.length - 1]}</h3>
      </div>
    </section>
  );
}

export default Breadcrumb;
