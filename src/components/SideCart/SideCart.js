import style from "./SideCart.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";

import { useSelector } from "react-redux";
import { faParachuteBox } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function SideCart(props, ref) {
  const cartCount = useSelector((state) => state.cart.count);

  const [visible, setVisible] = useState(false);

  const cartRef = useRef();
  const boxIconRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      boxIconCurrent: boxIconRef.current,
    };
  });

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
      cartRef.current && cartRef.current.removeAttribute("close");
      cartRef.current && cartRef.current.setAttribute("open", "");
    } else {
      cartRef.current && cartRef.current.removeAttribute("open");
      cartRef.current && cartRef.current.setAttribute("close", "");
    }
  });

  return (
    <a href="#">
      <div className={cx("icon-wrapper")} ref={cartRef}>
        <div className="relative">
          <div className={cx("wrapper")}>
            <i className={cx("box-icon")} ref={boxIconRef}>
              <FontAwesomeIcon icon={faParachuteBox} />
            </i>
            <i className={cx("icon", "cart-icon", "ti-shopping-cart")}></i>
            <span className={cx("quantity")}>{cartCount}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default forwardRef(SideCart);
