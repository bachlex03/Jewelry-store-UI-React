import style from "./Category.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const cx = classNames.bind(style);
let classes = {};

function Category({ category }) {
  const iconRefs = useRef();
  const [open, setOpen] = useState(false);

  const children = category.children || [];

  const handleOpen = () => {
    if (open) {
      classes = { closed: true };
      setOpen(false);
    } else {
      classes = { opened: true };
      setOpen(true);
    }
  };

  return (
    <div className={cx("parent")}>
      <div className="flex justify-between">
        <Link to={`/categories/${category.slug}`}>
          <h4 className={cx("heading")}>{category.name}</h4>
        </Link>
        <i className={cx("icon", classes)} ref={iconRefs} onClick={handleOpen}>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </div>
      <ul className={cx("list", classes)}>
        {children.map((child, index) => {
          return (
            <li key={index}>
              <Link to={`/categories/${child.slug}`} className={cx("item")}>
                {child.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
