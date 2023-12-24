import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Input({ label, isRequired, ...passProps }) {
  const props = {
    ...passProps,
  };

  if (isRequired) {
    props.required = true;
  }

  const classes = cx("label", { isRequired });
  return (
    <>
      <label htmlFor={label} className={classes}>
        {label}
      </label>
      <input id={label} className={cx("input")} {...props} />
    </>
  );
}

export default Input;
