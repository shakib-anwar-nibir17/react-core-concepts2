import "./Friends.css";
import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  // step 1 declare state to hold data using useState

  const [friends, setFriends] = useState([]);
  // step 2 use effect with dependency array
  useEffect(() => {
    // step 3 use fetch to load data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // step 4 set loaded data
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
