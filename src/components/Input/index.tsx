import React, { useContext, useState } from "react";
import Button from "../Common/Button";
import { Link, useNavigate } from "react-router-dom";
import CreateUser from "../CreateUser";
// import GetUser from "../LoginUser";
import { LoginContext } from "../../App";
import axios from "axios";

interface User {
  id: number;
  username: string;
  password: string;
  fullname: string;
  email: string;
  phonenumber: string;
}

export default function Input() {
  const navigate = useNavigate();

  const { formData, setFormData, setAuthenticated, setFullNameLogin } =
    useContext(LoginContext)!;

  const [checkLogin, setCheckLogin] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    setCheckLogin(!checkLogin);
  };

  // Handle Login
  const GetUser = async (username: string, password: string) => {
    const users = await axios.get("http://localhost:3000/users");

    const foundUser = users?.data.find(
      (user: User) => user.username === username
    );

    if (foundUser && foundUser.password === password) {
      setFullNameLogin(foundUser);
      console.log(foundUser);
      
      return true;
    } else {
      return false;
    }
  };

  const handleSummit = async (e: any) => {
    e.preventDefault();
    if (checkLogin) {
      CreateUser(formData);
    } else if (!checkLogin) {
      const isLogin = await GetUser(formData.username, formData.password);

      if (isLogin) {
        navigate("/");
        setAuthenticated(true);
      } else {
        return false;
      }
    }
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={(e) => handleSummit(e)}>
        <input
          value={formData.username}
          onChange={handleOnChange}
          type="text"
          name="username"
          placeholder="Username"
          className="w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none"
        />
        <input
          value={formData.password}
          onChange={handleOnChange}
          type="password"
          name="password"
          placeholder="Password"
          className="w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none"
        />
        {checkLogin && (
          <>
            <input
              value={formData.fullname}
              onChange={handleOnChange}
              type="text"
              name="fullname"
              placeholder="Fullname"
              className="w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none"
            />
            <input
              value={formData.email}
              onChange={handleOnChange}
              type="text"
              name="email"
              placeholder="Email"
              className="w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none"
            />
            <input
              value={formData.phonenumber}
              onChange={handleOnChange}
              type="text"
              name="phonenumber"
              placeholder="Phonenumber"
              className="w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none"
            />
          </>
        )}
        <p className="w-[320px] text-[1.2rem] text-white mt-[20px] text-center leading-7">
          Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
        {!checkLogin ? (
          <Button primary>ĐĂNG NHẬP</Button>
        ) : (
          <Button primary>ĐĂNG KÍ</Button>
        )}

        <p className="block w-[320px] text-[1.2rem] text-white mt-[10px] text-center leading-7">
          Nếu bạn chưa có tài khoản,{"  "}
          <Link
            to=""
            className="underline underline-offset-[2px]"
            onClick={handleLogin}
          >
            {!checkLogin
              ? "hãy đăng kí tài khoản tại đây "
              : "hãy đăng nhập tại đây"}
          </Link>
        </p>
      </form>
    </div>
  );
}
