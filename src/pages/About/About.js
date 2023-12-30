import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function About() {
  return <div className={cx("wrapper", "section-1200")}>About</div>;
}

export default About;
