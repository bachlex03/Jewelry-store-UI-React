import style from "./InputQuantity.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function InputQuantity() {
  return (
    <>
      <div className={cx("quantity-wrapper")}>
        <span className={cx("decrease-btn")}>-</span>
        <input
          type="text"
          className={cx("quantity-input")}
          name="quantity-input"
          value="1"
        />
        <span className={cx("increase-btn")}>+</span>
      </div>
    </>
  );
}

export default InputQuantity;
