import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

let originObj = null;

function Dropdown({ arr = [], products, setProducts, setNameSorting }) {
  // console.log(products);
  console.log("Dropdown mounted");

  if (!originObj || originObj.length === 0) {
    originObj = products;
  }

  const handleSort = (sortObj) => {
    switch (sortObj.type) {
      case "asc":
        setProducts(products.sort((a, b) => a.price - b.price));

        setNameSorting(sortObj.name);
        break;
      case "desc":
        setProducts(products.sort((a, b) => b.price - a.price));

        setNameSorting(sortObj.name);
        break;
      case "popularity":
        break;
      default:
        setProducts(originObj);

        setNameSorting(sortObj.name);
    }
  };
  return (
    <ul className={cx("list")}>
      {arr.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              handleSort(item);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
