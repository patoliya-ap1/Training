import { Navigate } from "react-router-dom";
import { useGLobalContext } from "../GlobalContext/GlobalContextProvider";

const ProtectedRoute = ({ children }) => {
  const {
    reducerValues: { isLoggedIn },
  } = useGLobalContext();

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
