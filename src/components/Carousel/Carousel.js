import style from "./Carousel.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

import images from "~/assets/images";

const cx = classNames.bind(style);

function Carousel({ heading = "Default heading", children }) {
  const carouselRef = useRef();

  const dragStart = (e) => {};

  const dragging = (e) => {
    console.log(e.pageX);
    // carouselRef.current.scrollLeft = e.pageX;
  };

  useEffect(() => {
    carouselRef.current.addEventListener("mouseover", dragging);
  });

  const dragStop = (e) => {};

  return (
    <div className={cx("carousel")}>
      <h2 className={cx("heading")}>{heading}</h2>
      <img src={images.imgCollection} alt="img" className={cx("img")} />
      <div className={cx("content")}>
        <i className={cx("left-btn", "icon")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>
        <i className={cx("right-btn", "icon")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>
        <div className={cx("wrapper")} ref={carouselRef}>
          {children.map((item, index) => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
