import style from "./Paging.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import React, { useMemo, memo, useState, useRef, Fragment } from "react";

const cx = classNames.bind(style);

let pagesRender = [];

function Paging({ length, productsShow, setShow }) {
  // console.log("Paging mounted");

  const [isActive, setActive] = useState(0);
  const pageRefs = useRef([]);

  useMemo(() => {
    const pageQuantity = Math.ceil(length / productsShow);

    pagesRender = [];
    for (let i = 0; i < pageQuantity; i++) {
      pagesRender.push(i);
    }
  }, [length]);

  const handlePaging = (index) => {
    const start = index * productsShow;
    const end = start + productsShow - 1;

    isActive === index || setActive(index);

    setShow({ start, end });
  };

  return (
    <ul className={cx("pages")}>
      {pagesRender.map((item, index) => {
        pageRefs.current[index] = React.createRef();

        let active = isActive === index ? true : false;

        return (
          <li
            className={cx("", { active })}
            key={index}
            ref={pageRefs.current[index]}
            onClick={() => handlePaging(index)}
          >
            {index + 1}
          </li>
        );
      })}

      {pagesRender.length > 0 ? (
        <li
          onClick={() => {
            if (isActive !== pagesRender.length - 1) {
              setActive(isActive + 1);
              handlePaging(isActive + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </li>
      ) : (
        <Fragment />
      )}
    </ul>
  );
}

export default memo(Paging);
