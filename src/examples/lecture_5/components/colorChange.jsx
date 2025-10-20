import { useEffect, useState } from "react";

const ColorChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const getRandomColor = () => {
    const letters = "0123456789abcdef";
    let colorHash = "#";

    for (let i = 0; i < 6; i++) {
      colorHash += letters[Math.floor(Math.random() * 16)];
    }

    return colorHash;
  };

  useEffect(() => {
    function handleKeyPress() {
      if (event.keyCode === 32) {
        setBackgroundColor(getRandomColor());
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "350px",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>
        Press the spacebar to change the background color of the Component
      </h3>
    </div>
  );
};

export default ColorChange;
