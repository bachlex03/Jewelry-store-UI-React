import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Dropdown({ arr = [], productsRef, setProducts, setNameSorting }) {
  const handleSort = (sortObj) => {
    switch (sortObj.type) {
      case "asc":
        setProducts(
          productsRef.current.distinct.sort((a, b) => a.price - b.price)
        );

        setNameSorting(sortObj.name);
        break;
      case "desc":
        setProducts(
          productsRef.current.distinct.sort((a, b) => b.price - a.price)
        );

        setNameSorting(sortObj.name);
        break;
      case "popularity":
        break;
      default:
        setProducts(productsRef.current.distinct.sort((a, b) => a._id - b._id));

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
