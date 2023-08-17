import { useNavigate } from "react-router-dom";

type UserProps = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phonenumber: string;
};

function CreateUser(user: UserProps) {
  // const navigate = useNavigate();

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
     
    })
    .catch((error) => console.error("Error creating post:", error));
}

// function getUser(user: UserSignin) {
//   fetch("http://localhost:3000/users"),
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     }
// }

export default CreateUser;
