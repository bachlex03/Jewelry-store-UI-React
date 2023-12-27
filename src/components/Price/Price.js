import style from "./Price.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Price({ sale, pos_shop, old_new_price, fs_15 }) {
  const classes = {
    pos_shop,
    old_new_price,
    fs_15,
  };

  console.log(classes);

  const renderPrice = {
    current: <span className={cx("price", { ...classes })}>$ 500.00</span>,
    sale: (
      <>
        <span className={cx("new-price", { ...classes })}>$ 424.00</span>
        <span className={cx("old-price", { ...classes })}>$ 500.00</span>
      </>
    ),
    old_new_price: (
      <>
        <span className={cx("old-price", { ...classes })}>$ 500.00</span>
        <span className={cx("new-price", { ...classes })}>$ 424.00</span>
      </>
    ),
  };

  return (
    <>
      <div className={cx("price-wrapper")}>
        {sale
          ? old_new_price
            ? renderPrice.old_new_price
            : renderPrice.sale
          : renderPrice.current}
      </div>
    </>
  );
}

export default Price;
