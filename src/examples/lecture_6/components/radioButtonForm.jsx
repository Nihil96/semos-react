import { useState } from "react";

function RadioButtonForm() {
  const [gender, setGender] = useState("");

  const handleGenderChage = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You selected: ", gender);
  };

  return (
    <>
      <h2>React Form with radio buttons</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChage}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChage}
          />{" "}
          Female
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default RadioButtonForm;
