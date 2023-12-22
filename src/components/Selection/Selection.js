import style from "./Selection.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useRef, useEffect, useState } from "react";

const cx = classNames.bind(style);

function Selection({ name, values }) {
  let listRef = useRef();
  let [value, setValue] = useState("Choose your option");

  useEffect(() => {
    let valuesList = listRef.current.children;
    valuesList = Array.from(valuesList);

    valuesList.forEach((element, index) => {
      element.addEventListener("click", function (e) {
        listRef.current.classList.add("hidden");

        setValue(e.target.innerText);
      });
    });
  }, []);

  const handleList = (e) => {
    listRef.current.classList.toggle("hidden");
  };

  const handleMouseLeave = (e) => {
    listRef.current.classList.add("hidden");
  };

  return (
    <div className={cx("variation-wrapper")}>
      <span className={cx("variation-name")}>{name}</span>
      <div className={cx("selection")}>
        <div className={cx("selection-wrapper")} onClick={handleList}>
          <span>{value}</span>
          <i className={cx("icon")}>
            <FontAwesomeIcon icon={faChevronDown} />
          </i>
        </div>
        <ul
          className={cx("variation-list", "hidden")}
          onMouseLeave={handleMouseLeave}
          ref={listRef}
        >
          <li>16.0</li>
          <li>16.5</li>
          <li>17.0</li>
          <li>17.5</li>
        </ul>
      </div>
    </div>
  );
}

export default Selection;
