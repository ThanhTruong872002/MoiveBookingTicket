import React, { useState, useContext, Dispatch, SetStateAction } from "react";
import "./App.css";
import useRouterElement from "./routes/useRouterElement";

type LoginContextType = {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = React.createContext<LoginContextType | undefined>(
  undefined
);

function App() {
  const routerElement = useRouterElement();

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      <div>{routerElement}</div>
    </LoginContext.Provider>
  );
}

export default App;
