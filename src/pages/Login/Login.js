import styles from "./Login.module.scss";
import classNames from "classnames/bind";

import { Input, Button } from "~/components";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className="section-1200">
      <form>
        <div className={cx("wrapper")}>
          <h3 className={cx("heading")}>Login</h3>
          <div className="">
            <Input
              label="Email address"
              placeholder="email@gmail.com"
              type="email"
              isRequired
            />
          </div>
          <div className="mt-15">
            <Input
              label="Password"
              placeholder="password"
              type="text"
              isRequired
            />
          </div>
          <div className="text-right mt-10">
            <Button primary bold>
              LOG IN
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
            <div className="mt-10">
              You&nbsp;
              <Button to="/otp" styleLink>
                forgot
              </Button>
              &nbsp;your password ?
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
