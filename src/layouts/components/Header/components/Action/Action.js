import styles from "./Action.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import { useAuth } from "~/hooks/useAuth";
import { Button } from "~/components";

const cx = classNames.bind(styles);

function Action() {
  const auth = useAuth();

  return (
    <nav className={cx("wrapper")}>
      <div className="flex justify-between align-center section-1200">
        <ul className={cx("list")}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

        <div className={cx("action")}>
          {auth.user ? (
            <Button
              to="/login"
              header
              primary
              onClick={() => {
                auth.logout();
              }}
            >
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faRightToBracket} />
              </i>
              Logout
            </Button>
          ) : (
            <Button to="/login" header primary>
              <i className={cx("icon")}>
                <FontAwesomeIcon icon={faRightToBracket} />
              </i>
              Login
            </Button>
          )}

          <Button to="/customer/dashboard" header primary>
            <i className={cx("icon")}>
              <FontAwesomeIcon icon={faUser} />
            </i>
            My account
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Action;
