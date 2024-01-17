import style from "./Carousel.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

import { CarouselItem } from "~/components";

import images from "~/assets/images";

const cx = classNames.bind(style);

let isDragging = false;
let startX, startScrollLeft;

function Carousel({ heading = "Default heading", children }) {
  const carouselRef = useRef();
  const firstCardRef = useRef();

  const dragStart = (e) => {
    carouselRef.current.classList.add("isDragging");
    isDragging = true;

    startX = e.pageX;

    startScrollLeft = carouselRef.current.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  document.addEventListener("mouseup", () => {
    isDragging = false;
    carouselRef.current.classList.remove("isDragging");
  });

  useEffect(() => {
    const btns = document.querySelectorAll(".icon-js");
    const firstCardWidth = firstCardRef.current.offsetWidth;

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        carouselRef.current.scrollLeft +=
          btn.id === "btn-left" ? -firstCardWidth : firstCardWidth;
      });
    });

    console.log();
  }, []);

  return (
    <div className={cx("carousel")}>
      <h2 className={cx("heading")}>{heading}</h2>
      <img src={images.imgCollection} alt="img" className={cx("img")} />
      <div
        className={cx("content")}
        ref={carouselRef}
        onMouseMove={dragging}
        onMouseDown={dragStart}
      >
        <i id="btn-left" className={cx("left-btn", "icon", "icon-js")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>
        <i id="btn-right" className={cx("right-btn", "icon", "icon-js")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>

        <div className={cx("wrapper")} ref={firstCardRef}>
          <CarouselItem
            author="Marry Lou"
            date="August 15, 2018"
            link="Buying"
            img={images.owl1}
            heading="Choosing Sterling Silver as a Wedding Gift"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
          />
        </div>
        <div className={cx("wrapper")}>
          <CarouselItem
            author="Marry Lou"
            date="August 15, 2018"
            link="Buying"
            img={images.owl2}
            heading="Minimal Luxurious Collection of Diamond Rings"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
          />
        </div>
        <div className={cx("wrapper")}>
          <CarouselItem
            author="Marry Lou"
            date="August 15, 2018"
            link="Buying"
            img={images.owl3}
            heading="Ruby on Rose Accessories and Blue Gemstones"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
          />
        </div>
        <div className={cx("wrapper")}>
          <CarouselItem
            author="Marry Lou"
            date="August 15, 2018"
            link="Buying"
            img={images.owl2}
            heading="New Retro Collection of Pendants and Ring sets"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
          />
        </div>
        <div className={cx("wrapper")}>
          <CarouselItem
            author="Marry Lou"
            date="August 15, 2018"
            link="Buying"
            img={images.owl1}
            heading="Matching Jewellery Sets with your Outwear"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
