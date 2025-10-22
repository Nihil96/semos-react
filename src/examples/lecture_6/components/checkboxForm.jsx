import { useState } from "react";

function CheckboxForm() {
  const [hobbies, setHobbies] = useState([]);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setHobbies([...hobbies, event.target.value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Selected hobbies", hobbies);
  };

  return (
    <>
      <h2>Checkbox Form Example</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            value="reading"
            checked={hobbies.includes("reading")}
            onChange={handleCheckboxChange}
          />{" "}
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            value="sports"
            checked={hobbies.includes("sports")}
            onChange={handleCheckboxChange}
          />{" "}
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            value="cooking"
            checked={hobbies.includes("cooking")}
            onChange={handleCheckboxChange}
          />{" "}
          Cooking
        </label>
        <label>
          <input
            type="checkbox"
            value="crossfit"
            checked={hobbies.includes("crossfit")}
            onChange={handleCheckboxChange}
          />{" "}
          Crossfit
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CheckboxForm;
