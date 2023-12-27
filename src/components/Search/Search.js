import style from "./Search.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState, useRef, useEffect } from "react";

import images from "~/assets/images";
import { useDebounce } from "~/hooks";
import { Price } from "~/components";
import * as searchService from "~/apiServices/searchService";

const cx = classNames.bind(style);

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [clearIcon, setClearIcon] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const [products, setProducts] = useState([]);

  const inputRef = useRef();
  const clearRef = useRef();
  const spinnerRef = useRef();

  const debounced = useDebounce(inputValue, 500);

  const handleClear = (e) => {
    setInputValue("");
    setProducts([]);
    inputRef.current.focus();
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setClearIcon(false);
    setSpinner(false);
  };

  useEffect(() => {
    if (inputValue.trim() === "") {
      setClearIcon(false);
    } else {
      setClearIcon(true);
    }
  });

  useEffect(() => {
    if (!inputValue) {
      setProducts([]);
      return;
    }

    const fetchApi = async () => {
      try {
        const result = await searchService.search(debounced);

        setProducts(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
  }, [debounced]);

  const icons = {
    xmark: (
      <i className={cx("icon", "xmark")} ref={clearRef} onClick={handleClear}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </i>
    ),
    spinner: (
      <i ref={spinnerRef} className={cx("icon", "spinner")}>
        <FontAwesomeIcon icon={faSpinner} />
      </i>
    ),
  };

  return (
    <div className={cx("wrapper")}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className={cx("search-input")}
          ref={inputRef}
          onChange={handleInput}
          onFocus={() => {
            setShowResult(true);
          }}
          value={inputValue}
        />
        {clearIcon ? icons.xmark : Fragment}
        {spinner ? icons.spinner : Fragment}
      </div>
      <ul
        className={cx("list")}
        style={{
          display: showResult && products.length > 0 ? "block" : "none",
        }}
      >
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link to="/details" className="flex align-center">
                <img
                  src={images.product}
                  alt="product-img"
                  className={cx("img")}
                />
                <div>
                  <h4 className={cx("name")}>
                    Veronece 18K Clad 10 Diamond Cut
                  </h4>
                  <div className="flex justify-between align-center mt-10">
                    <span className={cx("category")}>Band</span>
                    <Price fs_15 />
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Search;
