import styles from "./SubCategoryItem.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SubCategoryItem({ parentName }) {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("parent")}>
        <Link>Bracelets</Link>
      </h4>
      <ul className={cx("list")}>
        <li>
          <Link to="">item</Link>
        </li>
        <li>
          <Link to="">item</Link>
        </li>
        <li>
          <Link to="">item</Link>
        </li>
        <li>
          <Link to="">item</Link>
        </li>
        <li>
          <Link to="">item</Link>
        </li>
      </ul>
    </div>
  );
}

export default SubCategoryItem;
