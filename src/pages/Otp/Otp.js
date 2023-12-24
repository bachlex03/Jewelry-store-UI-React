import styles from "./Otp.module.scss";
import classNames from "classnames/bind";

import { Input, Button } from "~/components";

const cx = classNames.bind(styles);

function Otp() {
  return (
    <div className="section-1200">
      <form>
        <div className={cx("wrapper")}>
          <h3 className={cx("heading")}>OTP</h3>
          <div>
            <Input
              label="Your email address"
              placeholder="email@gmail.com"
              type="email"
              isRequired
            />
          </div>
          <div className="text-right mt-10">
            <Button primary bold>
              GET OTP
            </Button>
          </div>
          <div>
            <div>
              You can&nbsp;
              <Button to="/register" styleLink>
                register
              </Button>
              &nbsp;for new Account
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Otp;
