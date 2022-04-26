import React, { useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = React.useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>FriendsList</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            {friend.name} - {friend.age} - {friend.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
