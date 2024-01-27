import styles from "./VariationItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { FiltersContext } from "~/pages/Shop/Shop";

import * as productFilter from "~/utils/productFilter";

const cx = classNames.bind(styles);

function VariationItem({ name, colorObj }) {
  const [checked, setChecked] = useState(false);

  const { filters, setFilters, allProductsRef, setProducts, categories } =
    useContext(FiltersContext);

  const { categoryParam } = useParams();

  const handleCheck = () => {
    setChecked(!checked);

    handleFilter();
  };

  const handleFilter = () => {
    let newFilters = filters;

    if (filters[name].includes(colorObj._id)) {
      newFilters[name] = filters[name].filter((item) => {
        return item !== colorObj._id;
      });
    } else {
      newFilters[name].push(colorObj._id);
    }

    setFilters(newFilters);

    const filteredProducts = productFilter.filterByCategory_Variation(
      allProductsRef.current,
      categories,
      categoryParam,
      filters
    );

    // setProducts(filteredProducts);
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
        <p className={cx("name")}>{colorObj.name}</p>
      </div>
      <span className={cx("quantity")}>(0)</span>
    </div>
  );
}

export default VariationItem;
