import styles from "./Shop.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import Sidebar from "~/layouts/components/Sidebar";
import Product from "~/components/Product";

const cx = classNames.bind(styles);

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25,
];

const numberOfProduct = 9;
const pageQuantity = Math.floor(arr.length / numberOfProduct);
const renderPages = [];

for (let i = 0; i < pageQuantity; i++) {
  renderPages.push(i);
}

function Shop() {
  const [showProducts, setShowProducts] = useState({ start: 0, end: 8 });

  const handlePaging = (start, end) => {
    setShowProducts({ start, end });
  };
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-3">
          <Sidebar />
        </div>
        <div className="col l-9">
          <div className="row">
            {arr.map((item, index) => {
              if (index >= showProducts.start && index <= showProducts.end)
                return (
                  <div key={index} className="col l-4">
                    <Product />
                  </div>
                );
            })}
          </div>
          <div className={cx("paging-wrapper")}>
            <ul className={cx("pages")}>
              {renderPages.map((item, index) => {
                const start = index * numberOfProduct;
                const end = start + numberOfProduct - 1;

                return (
                  <li key={index} onClick={() => handlePaging(start, end)}>
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
  );
}

export default Shop;
