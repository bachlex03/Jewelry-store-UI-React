import styles from "./VariationItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

let checked = true;

function VariationItem({ variation }) {
  const handleCheck = () => {};

  console.log(variation);

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
        <p className={cx("name")}>0</p>
      </div>
      <span className={cx("quantity")}>(0)</span>
    </div>
  );
}

export default VariationItem;
