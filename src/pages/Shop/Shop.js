import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, createContext, useRef } from "react";

import { Sidebar } from "~/layouts/components";
import { Product, ScrollToTop, Paging } from "~/components";

import * as productServices from "~/apiServices/productServices";
import * as categoryServices from "~/apiServices/categoryServices";
import * as productFilter from "~/utils/productFilter";

const cx = classNames.bind(styles);

export const FiltersContext = createContext();

let productsLength = 0;
const productsShow = 9;

function Shop() {
  console.log("shop mounted");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ color: [], size: [] });

  const [show, setShow] = useState({ start: 0, end: 8 });

  const productsDistinctRef = useRef([]);
  const allProductsRef = useRef([]);

  const { categoryParam } = useParams();

  const handleFilterObj = {
    setFilters,
    allProductsRef,
  };

  // fetch products
  useEffect(() => {
    const fetchApi = async () => {
      const allProducts = await productServices.products();

      const distinctProducts = productFilter.distinctBy(
        allProducts,
        "category"
      );

      setProducts(distinctProducts);

      allProductsRef.current = allProducts;

      productsDistinctRef.current = distinctProducts;
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

    let params = [categoryParam];

    categories.forEach((category) => {
      if (category["slug"] === categoryParam) {
        params = [...category.children];
      }
    });

    const products_category = productFilter.filterByCategory(
      productsDistinctRef.current,
      params
    );
    setProducts(products_category);
  }, [categoryParam, categories]);

  return (
    <>
      <ScrollToTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <FiltersContext.Provider value={{ filters, handleFilterObj }}>
              <Sidebar categories={categories} />
            </FiltersContext.Provider>
          </div>
          <div className="col l-9">
            <div className="row">
              <div className="col l-4">
                <Product
                  product={null}
                  heading="14K Gold 9″ Diamond Ankle Bracelet"
                  sale
                />
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
