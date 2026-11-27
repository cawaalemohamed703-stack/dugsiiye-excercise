
import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("mchamoudadev");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchUser = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username.trim()}`
      );

      if (!response.ok) {
        throw new Error("User not found!");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div className="profile">
          <h2>{user.name || user.login}</h2>

          <img
            src={user.avatar_url}
            alt="User Profile"
          />

          <p>Location: {user.location || "N/A"}</p>

          <p>
            Public Repos: {user.public_repos}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
