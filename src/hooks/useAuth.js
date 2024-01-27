import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { store, remove } from "~/redux/features/user/userSlice";

import * as siteServices from "~/apiServices/siteServices";

const authContext = createContext(null);

function AuthProvider({ children }) {
  console.log("useAuth");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRedux = useSelector((state) => state.user);

  const checkValidCookie = async () => {
    const isExist = await siteServices.checkExistCookie();

    if (!isExist) {
      setUser(null);

      // navigate("/login");
    } else {
      setUser(isExist.data);

      dispatch(store(isExist.data));
    }
  };

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

  const logout = async () => {
    const result = await siteServices.logout();

    setUser(null);

    dispatch(remove());

    // navigate("/login");
  };

  // Check valid or exist JWT on reload page if user / hacker delete JWT cookie
  useEffect(() => {
    checkValidCookie();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout, checkValidCookie }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
};
