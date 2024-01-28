import styles from "./VariationItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState, useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import * as productFilter from "~/utils/productFilter";

import { FiltersContext } from "~/pages/Shop/Shop";

const cx = classNames.bind(styles);

function VariationItem({ name, colorObj }) {
  const [checked, setChecked] = useState(false);

  const { categoryParam } = useParams();
  const location = useLocation();

  const { productsRef, setProducts, categories, filters, setFilters } =
    useContext(FiltersContext);

  const handleFilter = () => {
    let newFilters = filters;

    if (filters[name].includes(colorObj._id)) {
      newFilters[name] = filters[name].filter((item) => {
        return item !== colorObj._id;
      });
    } else {
      newFilters[name].push(colorObj._id);
    }

    const filteredProducts = productFilter.filterByCategory_Variation(
      productsRef.current.all,
      categories,
      categoryParam,
      newFilters
    );

    setFilters(newFilters);
    setProducts(filteredProducts);
  };

  const handleCheck = () => {
    setChecked(!checked);

    handleFilter();
  };

  // clear selection if change category or url
  useEffect(() => {
    setChecked(false);
  }, [location.pathname]);

  return (
    <div
      className={cx("wrapper", "flex justify-between")}
      onClick={handleCheck}
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
