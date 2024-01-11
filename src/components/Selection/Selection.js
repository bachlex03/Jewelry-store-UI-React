import style from "./Selection.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

import * as productFilter from "~/utils/productFilter";

const cx = classNames.bind(style);

function Selection(props, ref) {
  console.log("Selection mounted");

  const variantIdRef = useRef(0);

  let {
    name,
    othersVariation,
    products,
    availableVariants,
    defaultArr,
    setAvailableVariants,
  } = props;

  let [value, setValue] = useState("Choose your option");
  let [liDOM, setLiDOM] = useState([]);

  let listRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      selectValue: value,
      chosenId: variantIdRef.current,
      setValue,
    };
  });

  const handleVariation = (e) => {
    if (e.target.getAttribute("available") === "false") return;
    let variantId = e.target.getAttribute("data");

    variantIdRef.current = Number.parseInt(variantId);

    let productsByVariantId = productFilter.filterVariantsBy(
      name,
      variantId,
      products
    );

    setAvailableVariants(
      productFilter.filterVariants(productsByVariantId, othersVariation)
    );
  };

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
    let liDOM = [...defaultArr];

    availableVariants = [...new Set(availableVariants)].sort((a, b) => a - b);

    let i = 0;

    const validLi = liDOM.map((item, index) => {
      let available = false;

      if (availableVariants[i] === index + 1) {
        i++;
        available = true;
      }

      let classes = cx("", { noAvailable: !available });

      let DOM = (
        <li
          key={index}
          available={available ? "true" : "false"}
          data={index + 1}
          className={classes}
          onClick={handleVariation}
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

export default forwardRef(Selection);
