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

import * as productServices from "~/apiServices/productsService";
import Sidebar from "~/layouts/components/Sidebar";
import { Product, ScrollToTop } from "~/components";

const cx = classNames.bind(styles);

export const productsContext = createContext();

function Shop() {
  const numberOfProduct = useRef(9);
  const renderPages = useRef([]);
  const [showProducts, setShowProducts] = useState({ start: 0, end: 8 });
  const pageRefs = useRef([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { categorySlug } = useParams();

  const fetchProductApi = async () => {
    const result = await productServices.products();

    setProducts(result);
  };

  useEffect(() => {
    fetchProductApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await productServices.productsByCategory(categorySlug);
      setProducts(result);
    };

    if (location.pathname.startsWith("/categories")) {
      fetchApi();
      return;
    }

    fetchProductApi();
  }, [categorySlug]);

  useMemo(() => {
    const pageQuantity = Math.ceil(products.length / numberOfProduct.current);

    for (let i = 0; i < pageQuantity; i++) {
      renderPages.current.push(i);
    }
  }, []);

  const handlePaging = (start, end, pos) => {
    setShowProducts({ start, end });

    pageRefs.current.forEach((page) => {
      page.current.className = cx({ active: false });
    });

    pageRefs.current[pos].current.className = cx({ active: true });
  };

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
                  if (index >= showProducts.start && index < showProducts.end)
                    return (
                      <div key={index} className="col l-4">
                        <Product product={product} />
                      </div>
                    );
                })
              }
            </div>
            <div className={cx("paging-wrapper")}>
              <ul className={cx("pages")}>
                {renderPages.current.map((item, index) => {
                  const start = index * numberOfProduct.current;
                  const end = start + numberOfProduct.current - 1;

                  pageRefs.current[index] = React.createRef();

                  return (
                    <li
                      ref={pageRefs.current[index]}
                      key={index}
                      onClick={() => handlePaging(start, end, index)}
                    >
                      {index + 1}
                    </li>
                  );
                })}
                <li>
                  <FontAwesomeIcon icon={faAnglesRight} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
