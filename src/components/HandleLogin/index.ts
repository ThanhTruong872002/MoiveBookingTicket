import axios from "axios";

interface User {
  id: number;
  username: string;
  password: string;
  fullname: string;
  email: string;
  phonenumber: string;
}

const GetUser = async (username: string, password: string) => {

  const users = await axios.get("http://localhost:3333/users")
  const foundUser = users?.data.find(
    (user: User) => user.username === username
  );
  if (foundUser && foundUser.password === password) {
    return true
  } else {
    return false
  }

};

export default GetUser;
