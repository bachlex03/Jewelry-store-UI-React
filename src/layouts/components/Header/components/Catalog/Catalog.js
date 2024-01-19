import styles from "./Catalog.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

import { CategoriesHeader } from "~/components";

const cx = classNames.bind(styles);

let timer;

function Catalog() {
  const categoriesRef = useRef();

  const handleDisplay = () => {
    let closed = categoriesRef.current.getAttribute("closing");

    if (closed) {
      categoriesRef.current.setAttribute("display-non", "");
    }
  };

  const handleOpen = (e) => {
    if (!categoriesRef.current) return;
    categoriesRef.current.removeAttribute("display-non");

    categoriesRef.current.removeAttribute("closing");

    categoriesRef.current.setAttribute("opening", "");
  };

  const handleClose = (e) => {
    clearTimeout(timer);

    timer = null;

    categoriesRef.current.removeAttribute("opening");

    categoriesRef.current.setAttribute("closing", true);

    categoriesRef.current.removeEventListener("animationend", () => {});
  };

  return (
    <section className={cx("catalog", "flex")}>
      <div className="flex justify-between align-center section-1100">
        <ul className={cx("catalog__list")}>
          <li>
            <Link to="/home" className={cx("item")}>
              Home
            </Link>
          </li>
          <li
            className={cx("shop-catalog")}
            onMouseOver={() => {
              if (!timer) {
                timer = setTimeout(() => {
                  handleOpen();
                }, 200);
              }
            }}
            onMouseLeave={handleClose}
          >
            <div>
              <Link to="/shop" className={cx("item")}>
                Shop
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cx("icon")}
                  onMouseOver={(e) => {
                    e.stopPropagation();
                  }}
                />
              </Link>
            </div>

            <div
              display-non="true"
              className={cx("categories-header-component")}
              ref={categoriesRef}
              onMouseMove={(e) => {
                e.stopPropagation();
              }}
              onAnimationEnd={handleDisplay}
            >
              <CategoriesHeader handleClose={handleClose} />
            </div>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
              New Collection
            </Link>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
              Sale
            </Link>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
              Woman
            </Link>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
              Watches
            </Link>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
              Pages
            </Link>
          </li>
          <li>
            <Link to="/home" className={cx("item")}>
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
