import { useState } from "react";

function KeyboardEvents() {
  const [keyboardKey, setkeyboardKey] = useState(null);

  const handleKeyDown = (event) => {
    console.log(event);
    setkeyboardKey(event.key);
  };

  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Press any key"
      />
      <h2>{keyboardKey}</h2>
    </>
  );
}

export default KeyboardEvents;
