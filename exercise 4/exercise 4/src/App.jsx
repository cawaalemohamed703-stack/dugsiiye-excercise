import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </button>
      <p>Xaaladda hadda: {isOn ? "ON" : "OFF"}</p>
    </div>
  );
}