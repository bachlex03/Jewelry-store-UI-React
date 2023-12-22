import style from "./Carousel.module.scss";
import classNames from "classnames/bind";

import images from "~/assets/images";

const cx = classNames.bind(style);

function Carousel({ heading = "Default heading", children }) {
  return (
    <div className={cx("carousel")}>
      <h2 className={cx("heading")}>{heading}</h2>
      <img src={images.imgCollection} alt="img" className={cx("img")} />
      <div className={cx("stack")}>
        <div className={cx("stack-wrapper", "section-1200")}></div>
      </div>
      <div className={cx("wrapper", "section-1200")}>
        {children.map((item, index) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default Carousel;
