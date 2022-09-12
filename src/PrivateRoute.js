import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainStateContext } from "./MainContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(MainStateContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user?._id) {
      navigate("/login");
    }
  }, [user?._id]);
  return <>{children}</>;
};

export default PrivateRoute;
