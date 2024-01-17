import style from "./CarouselItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "~/components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

function CarouselItem({ img, link, heading, desc, author, date }) {
  return (
    <div className={cx("wrapper")}>
      <div className="relative">
        <img src={img} alt="owl" className={cx("img")} draggable="false" />
        <i className={cx("icon")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </div>
      <div className={cx("body")}>
        <Button href="#" className={cx("link")}>
          {link}
        </Button>
        <h3 className={cx("heading")}>{heading}</h3>
        <p className={cx("desc")}>{desc}</p>
        <span className={cx("post-author-date")}>
          by <strong className={cx("highlight")}>{author}</strong> on
          <strong className={cx("highlight")}> {date}</strong>
        </span>
      </div>
    </div>
  );
}

export default CarouselItem;
