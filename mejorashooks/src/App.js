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
  });
}
