import { useState } from "react";

function DropdownForm() {
  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Country", country);
  };

  return (
    <div>
      <h2>Dropdown Form Exmaple</h2>

      <form onSubmit={handleSubmit}>
        <label>Select Country: </label>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="macedonia">Macedonia</option>
          <option value="uk">UK</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DropdownForm;
