import { createContext, useContext } from "react";
import { useState } from "react";
import * as userServices from "~/apiServices/userServices";

const authContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (user) => {
    const fetchApi = async (form) => {
      try {
        const result = await userServices.checkUser(form);

        setUser(user.email);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi(user);
  };

  const logout = () => {
    console.log(user);
    setUser(null);
  };

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
