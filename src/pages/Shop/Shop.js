import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useRef, useMemo } from "react";

import Sidebar from "~/layouts/components/Sidebar";
import { Product, ScrollToTop } from "~/components";

const cx = classNames.bind(styles);

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

function Shop() {
  const numberOfProduct = useRef(9);
  const renderPages = useRef([]);

  const [showProducts, setShowProducts] = useState({ start: 0, end: 8 });
  const pageRefs = useRef([]);

  useMemo(() => {
    const pageQuantity = Math.ceil(arr.length / numberOfProduct.current);

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
            <Sidebar />
          </div>
          <div className="col l-9">
            <div className="row">
              <div className="col l-4">
                <Product heading="14K Gold 9″ Diamond Ankle Bracelet" sale />
              </div>

              {arr.map((item, index) => {
                if (index >= showProducts.start && index < showProducts.end)
                  return (
                    <div key={index} className="col l-4">
                      <Product heading={index} />
                    </div>
                  );
              })}
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
