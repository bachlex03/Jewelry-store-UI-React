import style from "./InputQuantity.module.scss";
import classNames from "classnames/bind";

import { useState, forwardRef, useImperativeHandle } from "react";

const cx = classNames.bind(style);

function InputQuantity(props, ref) {
  let [inputValue, setInputValue] = useState(1);

  useImperativeHandle(ref, () => ({
    inputQuantity: inputValue,
  }));

  const handleIncrease = () => {
    setInputValue(inputValue + 1);
  };

  const handleDecrease = () => {
    if (inputValue > 1) setInputValue(inputValue - 1);
  };

  return (
    <div className={cx("quantity-wrapper")}>
      <span className={cx("decrease-btn")} onClick={handleDecrease}>
        -
      </span>
      <input
        type="text"
        className={cx("quantity-input")}
        name="quantity-input"
        value={inputValue}
        readOnly
      />
      <span className={cx("increase-btn")} onClick={handleIncrease}>
        +
      </span>
    </div>
  );
}

export default forwardRef(InputQuantity);
