import style from "./Dashboard.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";

const cx = classNames.bind(style);

function Dashboard() {
  console.log("Dashboard");

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const auth = useAuth();
  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    } else {
      setUser(auth.user);
    }
  }, []);
  return <h1>Dashboard</h1>;
}

export default Dashboard;
