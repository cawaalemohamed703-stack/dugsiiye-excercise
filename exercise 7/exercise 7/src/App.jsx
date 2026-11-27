
import { useState } from "react";

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(214);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <h3>Mouse X: {mouseX}</h3>
      <h3>Mouse Y: {mouseY}</h3>
    </div>
  );
}

export default App;
