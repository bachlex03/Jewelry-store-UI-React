import { useAuth } from "~/hooks/useAuth";
import { useLayoutEffect } from "react";

function PrivateRoutes({ children }) {
  const auth = useAuth();

  console.log("PrivateRoutes");

  useLayoutEffect(() => {
    auth.checkValidCookie();
  }, []);

  return children;
}

export default PrivateRoutes;
