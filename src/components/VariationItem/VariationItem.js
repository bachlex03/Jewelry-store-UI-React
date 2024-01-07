import styles from "./VariationItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";

import { FiltersContext } from "~/pages/Shop/Shop";

import * as productFilter from "~/utils/productFilter";

const cx = classNames.bind(styles);

function VariationItem({ name, colorObj }) {
  const [checked, setChecked] = useState(false);

  const { filters, handleFilterObj } = useContext(FiltersContext);

  const location = useLocation();
  const { categoryParam } = useParams();

  const handleCheck = () => {
    setChecked(!checked);

    handleFilter();
  };

  const handleFilter = () => {
    let newFilters;

    if (filters[name].includes(colorObj._id)) {
      newFilters[name] = filters[name].filter((item) => {
        return item !== colorObj._id;
      });
    } else {
      filters[name].push(colorObj._id);
    }

    let filteredProducts = productFilter.filterByVariation(
      handleFilterObj.allProductsRef.current,
      filters
    );

    if (location.pathname.startsWith("/categories/")) {
      // filteredProducts = productFilter.filterByCategory(filteredProducts, )
    }
  };

  return (
    <div
      className={cx("wrapper", "flex justify-between")}
      onClick={() => {
        handleCheck();
      }}
    >
      <div className="flex align-center">
        <i className={cx("icon")}>
          {checked ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </i>
        <p className={cx("name")}>{colorObj.colorName}</p>
      </div>
      <span className={cx("quantity")}>(0)</span>
    </div>
  );
}

export default VariationItem;
