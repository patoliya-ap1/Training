import { useGLobalContext } from "../GlobalContext/GlobalContextProvider";
import { Navigate } from "react-router-dom";

const LoggedProtectedRoute = ({ children }) => {
  const {
    reducerValues: { isLoggedIn },
  } = useGLobalContext();
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default LoggedProtectedRoute;
