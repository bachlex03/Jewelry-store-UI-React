import style from "./VariationItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const cx = classNames.bind(style);

function VariationItem({
  name,
  quantity = 0,
  setColorFilter,
  initCheck,
  index,
}) {
  let [checked, setChecked] = useState(initCheck);
  checked = initCheck;

  console.log("render variation");
  console.log(checked);

  const handleCheck = () => {
    setChecked(checked ? false : true);

    const arr = new Array(false, false, false);
    arr[index] = !checked;

    console.log(index);

    console.log("arr", arr);

    setColorFilter(arr);
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
        <p className={cx("name")}>{name}</p>
      </div>
      <span className={cx("quantity")}>({quantity})</span>
    </div>
  );
}

export default VariationItem;
