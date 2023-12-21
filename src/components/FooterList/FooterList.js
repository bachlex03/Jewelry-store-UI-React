import style from "./FooterList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function FooterList({ heading = "Company" }) {
  return (
    <>
      <h3 className={cx("heading")}>{heading}</h3>
      <ul className={cx("footer-list")}>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
    </>
  );
}

export default FooterList;
