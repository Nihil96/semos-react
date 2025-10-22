import { useState } from "react";

function FormWithValidation() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setError("Username is required!");
    } else {
      setError("");
      alert(`Form submited with username: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsername} />
      </label>
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default FormWithValidation;
