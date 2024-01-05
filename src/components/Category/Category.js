import style from "./Category.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useState, useRef, useContext } from "react";

import { productsContext } from "~/pages/Shop/Shop";

import * as productServices from "~/apiServices/productsService";

const cx = classNames.bind(style);
let classes = {};

function Category({ category }) {
  const iconRefs = useRef();
  const [open, setOpen] = useState(false);
  const setProducts = useContext(productsContext);
  const { slug } = useParams();

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

  const handleParentCategory = () => {};

  const handleChildCategory = () => {};

  return (
    <div className={cx("parent")}>
      <div className="flex justify-between">
        <Link to={`/categories/${category.slug}`}>
          <h4 className={cx("heading")} onClick={handleParentCategory}>
            {category.name}
          </h4>
        </Link>
        <i className={cx("icon", classes)} ref={iconRefs} onClick={handleOpen}>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </div>
      <ul className={cx("list", classes)}>
        {children.map((child, index) => {
          return (
            <li key={index} onClick={handleChildCategory}>
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
