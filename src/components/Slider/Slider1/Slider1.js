import styles from "./Slider1.module.scss";
import classNames from "classnames/bind";

import { Button } from "~/components";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Slider1() {
  return (
    <section className={cx("slider")}>
      <div className={cx("body")}>
        <h2 className={cx("introducing")}>Introducing</h2>
        <h1 className={cx("heading")}>COLOR FANTASY</h1>
        <p className={cx("sub-heading")}>
          SOPHISTICATED COLLECTION INSPIRED BY PASSION
        </p>
        <img src={images.sliderItem} alt="" className={cx("ring-img")} />

        <div className={cx("heading-btn")}>
          <Button small hover bold>
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Slider1;
