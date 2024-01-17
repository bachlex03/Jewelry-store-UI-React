import styles from "./Slider2.module.scss";
import classNames from "classnames/bind";

import { Button } from "~/components";
import images from "~/assets/images";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function Slider2() {
  const sliderRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    const rings = document.querySelectorAll(".ring-img-js");

    let X = 0;
    let Y = 0;

    sliderRef.current.addEventListener("mousemove", (e) => {
      X = e.pageX;
      Y = e.pageY;

      bodyRef.current.style.transform =
        "translate(" + (X / 200) * -7 + "px, " + (Y / 150) * -7 + "px)";

      rings[0].style.transform =
        "translate(" + (X / 200) * -7 + "px, " + (Y / 150) * -7 + "px)";

      rings[1].style.transform =
        "translate(" + (X / 200) * -7 + "px, " + (Y / 150) * -7 + "px)";

      rings[2].style.transform =
        "translate(" + (X / 200) * -7 + "px, " + (Y / 150) * -7 + "px)";

      rings[3].style.transform =
        "translate(" + (X / 200) * -12 + "px, " + (Y / 150) * -12 + "px)";

      rings[4].style.transform =
        "translate(" + (X / 200) * -7 + "px, " + (Y / 150) * -7 + "px)";

      rings[5].style.transform =
        "translate(" + (X / 200) * -12 + "px, " + (Y / 150) * -12 + "px)";
    });

    sliderRef.current.addEventListener("mouseleave", (e) => {
      let X = 0;
      let Y = 0;

      rings.forEach((ring) => {
        bodyRef.current.style.transform =
          "translate(" + (X / 150) * -7 + "px, " + (Y / 150) * -7 + "px)";

        ring.style.transform =
          "translate(" + (X / 100) * -5 + "px, " + (Y / 100) * -5 + "px)";
      });
    });
  }, []);
  return (
    <section className={cx("slider")} ref={sliderRef}>
      <div className={cx("body")} ref={bodyRef}>
        <img src={images.saleSlider} alt="" className={cx("sale-img")} />
        <h1 className={cx("heading", "mt-20")}>Summer Sale</h1>
        <p className={cx("date")}>JULY 15TH - AUGUST 30TH</p>
        <div className={cx("slider-btn")}>
          <Button small hover bold>
            LEARN MORE
          </Button>
        </div>
      </div>
      <img
        src={images.ringSmall}
        className={cx("ring-img", "ring-img-js")}
        alt=""
      />
      <img
        src={images.ringSmall}
        className={cx("ring-img", "ring-img-js")}
        alt=""
      />
      <img
        src={images.ringMedium}
        className={cx("ring-img", "ring-img-js")}
        alt=""
      />
      <img
        src={images.ringMedium}
        className={cx("ring-img", "ring-img-js")}
        alt=""
      />
      <img
        src={images.ringBig}
        className={cx("ring-img", "ring-img-js")}
        alt=""
      />
      <img
        src={images.ringBig2}
        className={cx("ring-img", "ring-img-js")}
        alt=""
      />
    </section>
  );
}

export default Slider2;
