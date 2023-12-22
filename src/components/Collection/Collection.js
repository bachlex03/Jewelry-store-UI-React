import style from "./Collection.module.scss";
import classNames from "classnames/bind";

import images from "~/assets/images";

const cx = classNames.bind(style);

function Collection({ heading = "Default heading", children }) {
  return (
    <>
      <h2 className={cx("heading")}>{heading}</h2>
      <img
        src={images.imgCollection}
        alt="img"
        className={cx("img-collection")}
      />
      <div className={cx("collections")}>
        {children.map((item, index) => {
          return item;
        })}
      </div>
    </>
  );
}

export default Collection;
