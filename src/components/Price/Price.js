import style from "./Price.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Price({ sale, pos_shop }) {
  const renderPrice = {
    current: <span className={cx("price")}>$ 500.00</span>,
    sale: (
      <>
        <span className={cx("new-price")}>$ 424.00</span>
        <span className={cx("old-price", pos_shop ? "pos-shop" : "")}>
          $ 500.00
        </span>
      </>
    ),
  };

  return (
    <>
      <div className={cx("price-wrapper")}>
        {sale ? renderPrice.sale : renderPrice.current}
      </div>
    </>
  );
}

export default Price;
