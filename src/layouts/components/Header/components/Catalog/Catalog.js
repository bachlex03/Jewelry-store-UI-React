import styles from "./Catalog.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

import { SubCategoryItem } from "~/components";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Catalog() {
  const shopRef = useRef();
  const subCategories = useRef();

  // const handleClosing = (e) => {
  //   subCategories.current.removeAttribute("open");
  //   subCategories.current.setAttribute("closing", "");
  // };

  // useEffect(() => {
  //   shopRef.current.addEventListener("mouseover", (e) => {
  //     subCategories.current.removeAttribute("closing");
  //     subCategories.current.setAttribute("open", "");

  //     const timerId = setTimeout(() => {
  //       shopRef.current.addEventListener("mouseleave", handleClosing);
  //     }, 500);

  //     subCategories.current.addEventListener("mouseover", () => {
  //       clearTimeout(timerId);
  //       shopRef.current.removeEventListener("mouseleave", handleClosing);
  //     });
  //   });

  //   subCategories.current.addEventListener("mouseleave", () => {
  //     subCategories.current.setAttribute("closing", "");
  //   });
  // }, []);

  return (
    <section className={cx("catalog", "flex")}>
      <div className="flex justify-between align-center section-1100">
        <ul className={cx("catalog__list")}>
          <li>
            <Link to="/home" className={cx("item")}>
              Home
            </Link>
          </li>
          <li className={cx("shop-catalog")}>
            <Link to="/shop" className={cx("item")} ref={shopRef}>
              Shop
              <FontAwesomeIcon icon={faChevronDown} className={cx("icon")} />
            </Link>

            <div className={cx("sub-categories")} ref={subCategories}>
              <div className="row">
                <div className="col l-4">
                  <SubCategoryItem />
                </div>
                <div className="col l-4">
                  <SubCategoryItem />
                </div>
                <div className="col l-4">
                  <SubCategoryItem />
                </div>
                <div className="col l-4">
                  <SubCategoryItem />
                </div>
                <div className="col l-4">
                  <SubCategoryItem />
                </div>
                <div className="col l-4">
                  <SubCategoryItem />
                </div>
              </div>
              <div className={cx("right-block")}>
                <img src={images.subCategories} alt="" className={cx("img")} />
              </div>
            </div>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              New Collection
            </Link>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              Sale
            </Link>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              Woman
            </Link>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              Men
            </Link>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              Watches
            </Link>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              Pages
            </Link>
          </li>
          <li>
            <Link to={""} className={cx("item")}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={cx("item")}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" className={cx("item")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={cx("item")}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Catalog;
