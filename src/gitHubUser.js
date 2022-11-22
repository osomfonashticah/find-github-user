import { useState, useEffect } from "react";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const resData = await res.json();
        setUser(resData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {user && (
        <ul>
          <li>
            <img src={user.avatar_url} alt={user.login} />
          </li>
          <li>
            <strong>name:</strong>
            {user.name}
          </li>
          <li>
            <strong>Bio:</strong> {user.bio ? user.bio : "NA"}
          </li>
          <li>
            <strong>Location:</strong>
            {user.location ? user.location : "NA"}
          </li>
          <li>
            <strong>Followers:</strong>
            {user.followers}
          </li>
          <li>
            <strong>Following:</strong>
            {user.following}
          </li>
          <li>
            <strong>Company:</strong>
            {user.company ? user.company : "NA"}
          </li>
        </ul>
      )}
    </div>
  );
}

export default GitHubUser;
