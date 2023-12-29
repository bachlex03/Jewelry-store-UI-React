import styles from "./Gallery.module.scss";
import classNames from "classnames/bind";

import images from "~/assets/images";

const cx = classNames.bind(styles);

function Gallery() {
  return (
    <div className={cx("wrapper", "section-1200")}>
      <figure className={cx("box")}>
        <img
          src={images.gallery1}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Blue Marine</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery5}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Wedding Day</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery8}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Blue</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery2}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Wedding Rings</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery4}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>White Gold Ring</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery6}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Diamond Set</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery3}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Pendants</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery7}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Diamond Ring</figcaption>
      </figure>
      <figure className={cx("box")}>
        <img
          src={images.gallery9}
          alt="gallery-img"
          className={cx("gallery-img")}
        />
        <figcaption className={cx("name")}>Perl Neckless</figcaption>
      </figure>
    </div>
  );
}

export default Gallery;
