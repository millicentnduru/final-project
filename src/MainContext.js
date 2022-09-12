import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainStateContext = createContext();

const MainContext = ({ children }) => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState({});

  console.log(loggedInUser);

  return (
    <MainStateContext.Provider
      value={{ user: loggedInUser, setUser: setLoggedInUser }}
    >
      {children}
    </MainStateContext.Provider>
  );
};

export default MainContext;
