import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAuth } from "~/hooks/useAuth";

import { Input, Button } from "~/components";

const cx = classNames.bind(styles);

function Login() {
  console.log("Login page");
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;

  const navigate = useNavigate();

  const sessionStorage = window.sessionStorage;

  const auth = useAuth();
  const user = useSelector((state) => state.user.information);

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.login(form);
  };

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      sessionStorage.setItem(name, value);
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("email")) {
      setForm((prev) => ({
        ...prev,
        ["email"]: sessionStorage.getItem("email"),
      }));
    }
  }, [email]);

  return (
    <div className="section-1200">
      <div className={cx("wrapper")}>
        <form onSubmit={handleSubmit}>
          <h3 className={cx("heading")}>Login </h3>
          <p className={cx("note")}>(email: user@gmail.com, password: user)</p>
          <div className="">
            <Input
              name="email"
              label="Email address"
              placeholder="email@gmail.com"
              type="email"
              isRequired
              value={email}
              onChange={handleForm}
            />
          </div>
          <div className="mt-15">
            <Input
              name="password"
              label="Password"
              placeholder="password"
              type="password"
              isRequired
              value={password}
              onChange={handleForm}
            />
          </div>
          <div className="text-right mt-10">
            <Button primary bold type="submit">
              LOG IN
            </Button>
          </div>
        </form>
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
    </div>
  );
}

export default Login;
