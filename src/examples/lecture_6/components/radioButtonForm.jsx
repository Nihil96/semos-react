import { useState } from "react"

function RadioButtonForm() {
  const [gender, setGender] = useState("")

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("You selected: ", gender)
  }

  return (
    <div>
      <h2>React Form with radio buttons</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleGenderChange}
            checked={gender === "male"}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleGenderChange}
            checked={gender === "female"}
          />{" "}
          Female
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RadioButtonForm
