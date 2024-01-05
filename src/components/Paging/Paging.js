import style from "./Paging.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import React, {
  useMemo,
  memo,
  forwardRef,
  useState,
  useRef,
  useEffect,
} from "react";

const cx = classNames.bind(style);

let pagesRender = [0];

function Paging({ length, productsShow }) {
  console.log("Paging mounted");

  const [isActive, setActive] = useState(0);
  const pageRefs = useRef([]);

  useMemo(() => {
    const pageQuantity = Math.ceil(length / productsShow);

    for (let i = 0; i < pageQuantity; i++) {
      pagesRender.push(i);
    }
  }, [length]);

  const handlePaging = (index) => {
    isActive === index || setActive(index);
  };

  return (
    <ul className={cx("pages")}>
      {pagesRender.map((item, index) => {
        // const start = index * numberOfProduct.current;
        // const end = start + numberOfProduct.current - 1;

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
            isActive === pagesRender.length - 1 || setActive(isActive + 1);
          }}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </li>
      ) : (
        "123"
      )}
    </ul>
  );
}

export default memo(Paging);
