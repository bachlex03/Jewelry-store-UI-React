import style from "./InputQuantity.module.scss";
import classNames from "classnames/bind";

import { useState, forwardRef, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { update } from "~/redux/features/cart/cartSlice";

const cx = classNames.bind(style);

function InputQuantity(props, ref) {
  const { quantity = 1, updateCart } = props;

  const dispatch = useDispatch();

  let [inputValue, setInputValue] = useState(quantity);

  useImperativeHandle(ref, () => ({
    inputQuantity: inputValue,
  }));

  const handleIncrease = () => {
    setInputValue(inputValue + 1);

    if (updateCart) {
      let updatedObj = {
        index: updateCart.index,
        item: { ...updateCart.item },
      };
      updatedObj.item.quantity += 1;

      dispatch(update(updatedObj));
    }
  };

  const handleDecrease = () => {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);

      if (updateCart) {
        let updatedObj = {
          index: updateCart.index,
          item: { ...updateCart.item },
        };
        updatedObj.item.quantity -= 1;

        dispatch(update(updatedObj));
      }
    }
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
