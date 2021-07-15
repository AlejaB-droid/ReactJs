import "./App.css";
import React, { useState, useEffect, useMemo } from "react";

function GithubUser({ user }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    setLoading(true);

    fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [user]);
  console.log(data);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{"Error: " + JSON.stringify(error)}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>{data.login}</h1>
        <img width="150px" src={data.avatar_url} alt="logo" />
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
        <p>Public repos: {data.public_repos}</p>
      </div>
    </div>
  );
}

export default function App() {
  return <GithubUser user="AlejaB-droid" />;
}
