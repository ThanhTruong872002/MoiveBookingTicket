import React, { useState, useContext, Dispatch, SetStateAction } from "react";
import "./App.css";
import useRouterElement from "./routes/useRouterElement";
import { log } from "console";

type FormData = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phonenumber: string;
  // maNhom: string,
  // maLoaiNguoiDung:string
};

type LoginContextType = {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  fullNameLogin: any;
  setFullNameLogin: React.Dispatch<React.SetStateAction<any>>;
};

export const LoginContext = React.createContext<LoginContextType | undefined>(
  undefined
);

function App() {
  const routerElement = useRouterElement();

  const [authenticated, setAuthenticated] = useState(false);

  const [fullNameLogin, setFullNameLogin] = useState({});

  console.log(fullNameLogin);
  

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    phonenumber: "",
    // maNhom: "GP01",
    // maLoaiNguoiDung: "khachHang",
  });

  return (
    <LoginContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        formData,
        setFormData,
        fullNameLogin,
        setFullNameLogin,
      }}
    >
      <div>{routerElement}</div>
    </LoginContext.Provider>
  );
}

export default App;
