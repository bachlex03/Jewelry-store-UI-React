import styles from "./Register.module.scss";
import classNames from "classnames/bind";

import { Input, Button } from "~/components";

const cx = classNames.bind(styles);

function Register() {
  return (
    <div className="section-1200">
      <form>
        <div className={cx("wrapper")}>
          <h3 className={cx("heading")}>Register</h3>
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
              label="Enter password"
              placeholder="password"
              type="text"
              isRequired
            />
          </div>
          <div className="mt-15">
            <Input
              label="Confirm password"
              placeholder="Enter password again"
              type="text"
              isRequired
            />
          </div>
          <div className="text-right mt-10">
            <Button primary bold>
              SIGN UP
            </Button>
          </div>
          <div>
            <div className="mt-10">
              Come back to&nbsp;
              <Button to="/login" styleLink>
                login
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
