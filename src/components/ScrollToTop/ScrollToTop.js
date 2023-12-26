import style from "./ScrollToTop.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function ScrollToTop({ axes_y = 700 }) {
  const [visible, setVisible] = useState(true);

  window.addEventListener("scroll", (e) => {
    console.log();
    if (window.pageYOffset > axes_y) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  const handleScroll = () => {};

  return (
    <a
      href="#"
      className={cx("wrapper")}
      onClick={handleScroll}
      style={{ display: visible ? "block" : "none" }}
    >
      <i className={cx("icon")}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </i>
    </a>
  );
}

export default ScrollToTop;
