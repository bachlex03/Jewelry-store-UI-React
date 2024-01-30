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

let productsByVariantId = null;

function Selection(props, ref) {
  const variantIdRef = useRef(0);

  let {
    name,
    othersVariation,
    products,
    availableVariants,
    defaultArr,
    setAvailableVariants,
    setClearOther,
  } = props;

  // set chosen variant in box
  let [value, setValue] = useState("Choose your option");
  let [clear, setClear] = useState(true);

  // handle show variant if available and blur if not available
  let [liDOM, setLiDOM] = useState([]);

  let listRef = useRef();

  // handle render valid variants in selection remain
  useImperativeHandle(ref, () => {
    return {
      selectValue: value,
      chosenId: variantIdRef.current,
      setValue,
      setClear,
    };
  });

  const handleVariation = (e) => {
    if (
      e.target.getAttribute("soldout") == null ||
      e.target.getAttribute("soldout") == "true"
    ) {
      return;
    }

    if (e.target.getAttribute("available") === "false") return;

    let variantId = e.target.getAttribute("data");

    variantIdRef.current = Number.parseInt(variantId);

    productsByVariantId = productFilter.filterVariantsBy(
      name,
      variantId,
      products
    );

    setAvailableVariants(
      productFilter.filterVariants(productsByVariantId, othersVariation)
    );

    setClearOther.current.setClear(false);
  };

  // Handle set value to box
  useEffect(() => {
    let valuesList = listRef.current.children;

    valuesList = Array.from(valuesList);

    valuesList.forEach((element, index) => {
      element.addEventListener("click", function (e) {
        if (
          element.getAttribute("available") === "true" &&
          element.getAttribute("soldout") === "false"
        ) {
          listRef.current.classList.add("hidden");

          setValue(e.target.innerText);
          setClear(false);
        }
      });
    });
  }, [liDOM]);

  // handle show available li variant
  useEffect(() => {
    let liDOM = [...defaultArr];

    availableVariants = [...new Set(availableVariants)].sort((a, b) => a - b);

    let i = 0;

    const validLi = liDOM.map((item, index) => {
      let available = false;
      let soldOut = false;

      if (availableVariants[i] === index + 1) {
        available = true;

        if (productsByVariantId) {
          let product = productsByVariantId.find(
            (product) => product.size === availableVariants[i]
          );

          if (!clear && product && product.quantity === 0) {
            soldOut = true;
          }
        }

        i++;
      }

      let classes = cx("", { noAvailable: !available });

      let DOM = (
        <li
          key={index}
          available={available ? "true" : "false"}
          soldout={soldOut ? "true" : "false"}
          data={index + 1}
          className={classes}
          onClick={handleVariation}
        >
          {item}
          {soldOut ? <span> Sold out</span> : null}
        </li>
      );
      return DOM;
    });
    setLiDOM(validLi);
  }, [availableVariants]);

  return (
    <div className={cx("variation-wrapper")}>
      <span className={cx("variation-name")}>{name}</span>
      <div className={cx("selection")}>
        <div
          className={cx("selection-wrapper")}
          onClick={() => {
            listRef.current.classList.toggle("hidden");
          }}
        >
          <span>{value}</span>
          <i className={cx("icon")}>
            <FontAwesomeIcon icon={faChevronDown} />
          </i>
        </div>
        <ul
          className={cx("variation-list", "hidden")}
          onMouseLeave={() => {
            listRef.current.classList.add("hidden");
          }}
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
