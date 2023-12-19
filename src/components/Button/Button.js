import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Button() {
  return <button className={cx("button")}></button>;
}

export default Button;
