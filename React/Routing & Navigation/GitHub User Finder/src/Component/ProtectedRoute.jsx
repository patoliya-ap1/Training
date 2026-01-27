import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [login, setLogin] = useState(true);

  return login ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
