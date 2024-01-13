import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { store, remove } from "~/redux/features/user/userSlice";

import * as siteServices from "~/apiServices/siteServices";

const authContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userRedux = useSelector((state) => state.user);

  const login = (form) => {
    const fetchApi = async (form) => {
      try {
        const result = await siteServices.login(form);

        navigate("/");

        setUser(result);

        dispatch(store(result));
      } catch (err) {
        alert("Could not login");
      }
    };

    fetchApi(form);
  };

  Cookies.remove("jwt");

  const logout = () => {
    setUser(null);

    dispatch(remove());

    navigate("/");
  };

  useEffect(() => {
    if (userRedux.information) {
      setUser(userRedux.information);
    }
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const isExistCookie = await siteServices.checkExistCookie();

      if (!isExistCookie) {
        setUser(null);
      }
    };

    fetchApi();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
};
