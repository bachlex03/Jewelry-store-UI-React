import style from "./Category.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Category() {
  return (
    <>
      <div className={cx("parent")}>
        <div className="flex justify-between">
          <h4 className={cx("heading")}>Bracelets</h4>
          <FontAwesomeIcon icon={faPlus} className={cx("icon")} />
        </div>
        <ul className={cx("list")}>
          <li>
            <Link className={cx("item")}>Bands</Link>
          </li>
          <li>
            <Link className={cx("item")}>Bands</Link>
          </li>
          <li>
            <Link className={cx("item")}>Bands</Link>
          </li>
          <li>
            <Link className={cx("item")}>Bands</Link>
          </li>
          <li>
            <Link className={cx("item")}>Bands</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Category;
