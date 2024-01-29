import style from "./Search.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState, useRef, useEffect } from "react";

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
  const listRef = useRef();

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
  }, [inputValue]);

  useEffect(() => {
    listRef.current.style.display = "none";
  }, []);

  useEffect(() => {
    if (!inputValue) {
      setProducts([]);

      return;
    }

    const fetchApi = async () => {
      try {
        const result = await searchService.search(debounced);

        listRef.current.style.display = "block";
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

            if (inputValue.length > 0) {
              listRef.current.style.display = "block";
            }
          }}
          value={inputValue}
        />
        {clearIcon ? icons.xmark : Fragment}
        {spinner ? icons.spinner : Fragment}
      </div>
      <ul
        ref={listRef}
        className={cx("list")}
        style={
          {
            // display: showResult && products.length > 0 ? "block" : "block",
          }
        }
        onMouseLeave={() => {
          listRef.current.style.display = "none";

          inputRef.current.blur();
        }}
      >
        {products.length ? (
          products.map((product, index) => {
            return (
              <li key={index}>
                <Link
                  to={`/products/${product.slug}`}
                  className="flex align-center"
                >
                  <img
                    src={product.imageUrls[0]}
                    alt="product-img"
                    className={cx("img")}
                  />
                  <div>
                    <h4 className={cx("name")}>{product.name}</h4>
                    <div className="flex justify-between align-center mt-10">
                      <span className={cx("category")}>{product.category}</span>
                      <Price
                        fs_15
                        value={product.price}
                        promotion={product.promotion}
                        old_new_price
                      />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <div className={cx("not-found")}>Product not found </div>
        )}
      </ul>
    </div>
  );
}

export default Search;
