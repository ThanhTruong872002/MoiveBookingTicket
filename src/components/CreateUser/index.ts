type UserProps = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phonenumber: string;
};

function createPost(user: UserProps) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      // After successful creation, refresh the post list
    })
    .catch((error) => console.error("Error creating post:", error));
}

export default createPost;
