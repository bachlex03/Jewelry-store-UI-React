import styles from "./MemberItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MemberItem({ imgSrc, name, position }) {
  return (
    <div className={cx("wrapper")}>
      <figure>
        <img src={imgSrc} alt="member img" className={cx("img")} />
        <div className={cx("body")}>
          <h4 className={cx("name")}>{name}</h4>
          <span className={cx("position")}>{position}</span>
        </div>
      </figure>
    </div>
  );
}

export default MemberItem;
