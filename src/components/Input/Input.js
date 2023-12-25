import styles from "./Input.module.scss";
import classNames from "classnames/bind";
import { Fragment } from "react";

const cx = classNames.bind(styles);
function Input({ label, isRequired, selection, textarea, note, ...passProps }) {
  let inputType;

  const props = {
    ...passProps,
  };

  if (isRequired) {
    props.required = true;
  }

  if (selection) {
    inputType = (
      <select className={cx("selection")}>
        <option>-- Choose your option --</option>
        <option value="0">Viet Nam</option>
        <option value="0">Ha Noi</option>
      </select>
    );
  } else if (textarea) {
    inputType = <textarea className={cx("text-area")}></textarea>;
  }

  const classes = cx("label", { isRequired });
  return (
    <>
      <label htmlFor={label} className={classes}>
        {label}
      </label>
      {inputType ? (
        inputType
      ) : (
        <input id={label} className={cx("input")} {...props} />
      )}
      {note ? <p className={cx("note")}>{note}</p> : Fragment}
    </>
  );
}

export default Input;
