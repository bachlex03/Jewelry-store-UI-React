import style from "./Dashboard.module.scss";
import classNames from "classnames/bind";

import { useAuth } from "~/hooks/useAuth";

const cx = classNames.bind(style);

function Dashboard() {
  console.log("Dashboard");

  // const auth = useAuth();
  // let user = auth.user;
  // console.log("user", user);

  return <h1>Dashboard</h1>;
}

export default Dashboard;
