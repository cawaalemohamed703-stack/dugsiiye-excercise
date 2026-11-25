
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("assalamu alaikum");

  return (
    <div className="container">
      <h1>Enter Your Name:</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>Choose a Greeting:</h1>

      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />

      <h2>{name && `${greeting} ${name}`}</h2>
    </div>
  );
}

export default App;
