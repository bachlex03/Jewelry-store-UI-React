import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, createContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function Shop() {
  console.log("shop mounted");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameSorting, setNameSorting] = useState("Default sorting");
  const [filters, setFilters] = useState({ color: [], size: [] });

  const [show, setShow] = useState({ start: 0, end: 8 });

  const allProductsRef = useRef([]);
  const dropdownRef = useRef();

  const { categoryParam } = useParams();

  // fetch products
  useEffect(() => {
    const fetchApi = async () => {
      const allProducts = await productServices.products();
      allProductsRef.current = allProducts;

      const distinctProducts = productFilter.distinctBy(
        allProducts,
        "category"
      );

      setProducts(distinctProducts);

      productsLength = distinctProducts.length;
    };

    fetchApi();
  }, []);

  // fetch categories
  useEffect(() => {
    const fetchApi = async () => {
      const result = await categoryServices.categories();

      setCategories(result);
    };

    fetchApi();
  }, []);

  // handle products by category
  useEffect(() => {
    if (categories.length === 0) return;

    const filteredProducts = productFilter.filterByCategory_Variation(
      allProductsRef.current,
      categories,
      categoryParam,
      filters
    );

    setProducts(filteredProducts);
  }, [categoryParam, categories]);

  return (
    <>
      <ScrollToTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <FiltersContext.Provider
              value={{
                filters,
                setFilters,
                allProductsRef,
                setProducts,
                categories,
              }}
            >
              <Sidebar categories={categories} />
            </FiltersContext.Provider>
          </div>
          <div className="col l-9">
            <div className="row">
              <div className={cx("top-show")}>
                <p className={cx("result-count")}>
                  Showing {products.length}–12 of {products.length} results
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
                      products={products}
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
              <div className="col l-4">
                <Product product={null} />
              </div>
              <div className="col l-4">
                <Product product={products[0]} soldOut />
              </div>

              {products.map((product, index) => {
                if (index >= show.start && index <= show.end)
                  return (
                    <div key={index} className="col l-4">
                      <Product product={product} />
                    </div>
                  );
              })}
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
