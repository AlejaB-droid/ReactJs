import useFetch from "./hooks";

function GithubUser({ user }) {
    const { loading, data, error } = useFetch(
      `https://api.github.com/users/${user}`
    );
  
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

  export default GithubUser