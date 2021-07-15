import "./App.css";
import GithubUser from "./GithubUser";
import React, { useState } from "react";

export default function App() {
  const [searchUser, setSearchUser] = useState("");

  const handleChange = (event) => {
    setSearchUser(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchUser} onChange={handleChange}/>
      <GithubUser user={searchUser} />
    </div>
  );
}
