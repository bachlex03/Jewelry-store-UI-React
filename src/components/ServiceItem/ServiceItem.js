import style from "./ServiceItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function ServiceItem({ heading, desc, imgSrc }) {
  return (
    <div className="flex justify-center items-center">
      <img src={imgSrc} alt="phone" className={cx("img-item")} />
      <div>
        <h3 className={cx("heading")}>{heading}</h3>
        <p className={cx("desc")}>{desc}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
