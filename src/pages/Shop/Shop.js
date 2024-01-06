import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect, createContext, useRef } from "react";

import { Sidebar } from "~/layouts/components";
import { Product, ScrollToTop, Paging } from "~/components";

import * as productServices from "~/apiServices/productServices";

const cx = classNames.bind(styles);

export const productsContext = createContext();

let productsLength = 0;
const productsShow = 9;

function Shop() {
  console.log("shop mounted");

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState({ start: 0, end: 8 });

  const productsRef = useRef([]);

  const location = useLocation();
  const { categoryParam } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.products();

      setProducts(result);

      productsRef.current = result;

      productsLength = result.length;
    };

    if (location.pathname.startsWith("/categories")) {
      const products_category = productsRef.current.filter(
        (product) => product.category === categoryParam
      );

      setProducts(products_category);

      return;
    }

    fetchApi();
  }, [categoryParam]);

  return (
    <>
      <ScrollToTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <productsContext.Provider value={{ products, setProducts }}>
              <Sidebar />
            </productsContext.Provider>
          </div>
          <div className="col l-9">
            <div className="row">
              {/* <div className="col l-4">
                <Product
                  product={products[0]}
                  heading="14K Gold 9″ Diamond Ankle Bracelet"
                  sale
                />
              </div> */}

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
