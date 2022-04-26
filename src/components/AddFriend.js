import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
  const { push } = useHistory();
  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    console.log(friend);
    axios
      .post("http://localhost:9000/api/friends", friend, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        push("/friends");
      });
  };
  return (
    <>
      <h2>AddFriend</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input onChange={handleChange} name="name" id="name" />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input onChange={handleChange} name="age" id="age" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input onChange={handleChange} name="email" id="email" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddFriend;
