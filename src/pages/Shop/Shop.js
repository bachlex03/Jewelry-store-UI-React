import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { useLocation, useParams } from "react-router-dom";
import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  useLayoutEffect,
} from "react";

import { Sidebar } from "~/layouts/components";
import { Product, ScrollToTop, Paging } from "~/components";

import * as productServices from "~/apiServices/productServices";
import * as categoryServices from "~/apiServices/categoryServices";

const cx = classNames.bind(styles);

export const categoriesContext = createContext();

let productsLength = 0;
const productsShow = 9;

function Shop() {
  console.log("shop mounted");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [show, setShow] = useState({ start: 0, end: 8 });

  const productsRef = useRef([]);

  const { categoryParam } = useParams();

  // fetch products
  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.products();

      setProducts(result);

      productsRef.current = result;
      productsLength = result.length;
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
    const handleProductsByCategory = (categoryParams = []) => {
      let products_category = [];

      categoryParams.forEach((pram) => {
        let products = productsRef.current.filter(
          (product) => product.category === pram
        );

        products_category = [...products_category, ...products];
      });

      return products_category;
    };

    if (categories.length === 0) return;
    if (categoryParam === undefined) return;

    let params = [];
    let categoryFilter = {};

    categories.forEach((category) => {
      if (category.slug === categoryParam) {
        categoryFilter = { ...category };
      }
    });

    if (Object.getOwnPropertyNames(categoryFilter).length === 0) {
      params = [categoryParam];
    } else {
      params = categoryFilter.children.map((child) => child.slug);
    }

    const products_category = handleProductsByCategory(params);

    setProducts(products_category);
  }, [categoryParam, categories]);

  return (
    <>
      {console.error("render DOM")}
      <ScrollToTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <Sidebar categories={categories} />
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

              {
                // eslint-disable-next-line
                products.map((product, index) => {
                  if (index >= show.start && index <= show.end)
                    return (
                      <div key={index} className="col l-4">
                        <Product product={product} />
                      </div>
                    );
                })
              }
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
