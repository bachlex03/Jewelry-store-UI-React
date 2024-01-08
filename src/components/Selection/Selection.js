import style from "./Selection.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useRef, useEffect, useState, useMemo } from "react";

const cx = classNames.bind(style);

function Selection({ name, availableVariants, defaultArr }) {
  let [value, setValue] = useState("Choose your option");
  let [liDOM, setLiDOM] = useState([]);

  let listRef = useRef();

  useEffect(() => {
    let valuesList = listRef.current.children;
    valuesList = Array.from(valuesList);

    valuesList.forEach((element, index) => {
      element.addEventListener("click", function (e) {
        if (element.getAttribute("available") === "true") {
          listRef.current.classList.add("hidden");

          setValue(e.target.innerText);
        }
      });
    });
  }, [liDOM]);

  useEffect(() => {
    console.log(defaultArr);
    let liDOM = defaultArr;

    const validLi = liDOM.map((item, index) => {
      let available = false;

      if (availableVariants[index] === index + 1) available = true;

      let classes = cx("", { noAvailable: !available });

      let DOM = (
        <li
          key={index}
          available={available ? "true" : "false"}
          data={index + 1}
          className={classes}
        >
          {item}
        </li>
      );

      return DOM;
    });

    setLiDOM(validLi);
  }, [availableVariants]);

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
          {liDOM.map((li) => {
            return li;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Selection;
