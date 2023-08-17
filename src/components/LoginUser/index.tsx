import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

interface User {
  id: number;
  username: string;
  password: string;
  fullname: string;
  email: string;
  phonenumber: string;
}

const GetUser = () => {
  const { formData, setAuthenticated } = useContext(LoginContext)!;

  // const navigate = useNavigate();

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data: User[]) => {

      const foundUser = data.find(
        (user) => user.username === formData.username
      );

      if (foundUser && foundUser.password === formData.password) {
        setAuthenticated(true);
        // navigate("/");
      } else {
        console.log("User not found or password does not match.");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};

export default GetUser;
