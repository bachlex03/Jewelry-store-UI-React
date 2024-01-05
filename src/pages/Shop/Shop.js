import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams } from "react-router-dom";
import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  createContext,
} from "react";

import Sidebar from "~/layouts/components/Sidebar";
import { Product, ScrollToTop, Paging } from "~/components";
import * as productServices from "~/apiServices/productsService";

const cx = classNames.bind(styles);

export const productsContext = createContext();

let productsLength = 0;
const productsShow = 9;

function Shop() {
  console.log("shop mounted");

  const [products, setProducts] = useState([]);

  const pageRef = useRef({ start: 0, end: 8 });

  const location = useLocation();
  const { categorySlug } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.products();

      setProducts(result);

      productsLength = result.length;
    };

    fetchApi();
  }, []);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const result = await productServices.productsByCategory(categorySlug);

  //     setProducts(result);
  //   };

  //   if (location.pathname.startsWith("/categories")) {
  //     fetchApi();
  //     return;
  //   }

  //   fetchProductsApi();
  // }, [categorySlug]);

  // const handlePaging = (start, end, pos) => {
  //   // setShowProducts({ start, end });

  //   pageRefs.current.forEach((page) => {
  //     page.current.className = cx({ active: false });
  //   });

  //   pageRefs.current[pos].current.className = cx({ active: true });
  // };

  return (
    <>
      <ScrollToTop />
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <productsContext.Provider value={setProducts}>
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
                  if (
                    index >= pageRef.current.start &&
                    index < pageRef.current.end
                  )
                    return (
                      <div key={index} className="col l-4">
                        <Product product={product} />
                      </div>
                    );
                })
              }
            </div>

            <div className={cx("paging-wrapper")}>
              <Paging length={productsLength} productsShow={productsShow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
