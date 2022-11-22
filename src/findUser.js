import { useState } from "react";
import GitHubUser from "./gitHubUser";

function FindUser() {
  const [userName, setUserName] = useState("");
  return (
    <div className="main-container">
      <h1>
        <strong>Find Github User</strong>
      </h1>
      <form>
        <label htmlFor="username"></label>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
      </form>
      <div>
        {userName ? (
          <GitHubUser username={userName} />
        ) : (
          <p>Please Initiate a search</p>
        )}
      </div>
    </div>
  );
}

export default FindUser;
