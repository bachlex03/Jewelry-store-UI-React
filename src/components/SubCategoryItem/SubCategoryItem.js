import styles from "./SubCategoryItem.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SubCategoryItem({ category }) {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("parent")}>
        <Link>{category ? category.name : "By Metal"}</Link>
      </h4>

      <ul className={cx("list")}>
        {category &&
          category.children.map((child, index) => {
            return (
              <li key={index}>
                <Link to={`/categories/${child.slug}`}>{child.name}</Link>
              </li>
            );
          })}

        {category ? (
          <></>
        ) : (
          <>
            <li>
              <Link to="">item</Link>
            </li>
            <li>
              <Link to="">item</Link>
            </li>
            <li>
              <Link to="">item</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default SubCategoryItem;
