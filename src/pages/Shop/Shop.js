import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect, createContext, useRef } from "react";

import { Sidebar } from "~/layouts/components";
import { Product, ScrollToTop, Paging, Dropdown } from "~/components";

import * as productServices from "~/apiServices/productServices";
import * as categoryServices from "~/apiServices/categoryServices";
import * as productFilter from "~/utils/productFilter";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export const FiltersContext = createContext();

let productsLength = 0;
const productsShow = 9;
let openDropdown = false;

let distinctProducts = [];

function Shop() {
  console.log("shop mounted");

  const [filters, setFilters] = useState({ colors: [], sizes: [] });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameSorting, setNameSorting] = useState("Default sorting");

  // paging
  const [show, setShow] = useState({ start: 0, end: 8 });

  const productsRef = useRef({ all: [], distinct: [] });

  // styling dropdown category
  const dropdownRef = useRef();

  const location = useLocation();
  const { categoryParam } = useParams();

  // Handle products onClick or reload page
  const handleProducts = () => {
    let products = productsRef.current.distinct;

    if (!products) return;

    const filteredProducts = productFilter.filterByCategory(
      products,
      categories,
      categoryParam
    );

    setProducts(filteredProducts);

    return filteredProducts;
  };

  // fetch products
  useEffect(() => {
    (async () => {
      const allProducts = await productServices.products();
      productsRef.current.all = allProducts;

      distinctProducts = productFilter.distinctBy(allProducts, "slug");

      productsRef.current.distinct = distinctProducts;

      if (location.pathname.startsWith("/categories")) {
        handleProducts();
      } else {
        setProducts(distinctProducts);
      }

      productsLength = distinctProducts.length;
    })();
  }, [categories]);

  // fetch categories
  useEffect(() => {
    (async () => {
      const result = await categoryServices.categories();

      setCategories(result);
    })();
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/categories")) {
      handleProducts();
    } else {
      setProducts(productsRef.current.distinct);
    }
  }, [categoryParam || categories]);

  return (
    <>
      <ScrollToTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <FiltersContext.Provider
              value={{
                setProducts,
                productsRef,
                categories,
                filters,
                setFilters,
              }}
            >
              <Sidebar categories={categories} products={distinctProducts} />
            </FiltersContext.Provider>
          </div>
          <div className="col l-9">
            <div className="row">
              <div className={cx("top-show")}>
                <p className={cx("result-count")}>
                  Showing{" "}
                  {products.length > show.end
                    ? show.end - show.start + 1
                    : products.length - show.start}
                  –9 of {products ? products.length : 0} results
                </p>
                <div
                  className={cx("sorting")}
                  onClick={() => {
                    dropdownRef.current.style.display = openDropdown
                      ? "none"
                      : "block";
                    openDropdown = !openDropdown;
                  }}
                >
                  {nameSorting}
                  <i className="ml-10">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </i>
                  <div
                    ref={dropdownRef}
                    className={cx("dropdown-component")}
                    onMouseLeave={() => {
                      dropdownRef.current.style.display = "none";
                      openDropdown = false;
                    }}
                  >
                    <Dropdown
                      productsRef={productsRef}
                      setProducts={setProducts}
                      setNameSorting={setNameSorting}
                      arr={[
                        { type: "popularity", name: "Sort by popularity" },
                        { type: "desc", name: "Sort by price: high - low" },
                        { type: "asc", name: "Sort by price: low - high" },
                        { type: "default", name: "Default sorting" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {products.map((product, index) => {
                if (index >= show.start && index <= show.end)
                  return (
                    <div key={index} className="col l-4">
                      <Product product={product} />
                    </div>
                  );
              })}

              {/* <div className="col l-4">
                <Product product={null} soldOut />
              </div>

              <div className="col l-4">
                <Product product={null} sale />
              </div> */}
            </div>

            <div className={cx("paging-wrapper", "mt-20")}>
              <Paging
                setShow={setShow}
                length={productsLength}
                productsShow={productsShow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
