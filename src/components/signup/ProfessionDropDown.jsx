import React, { useState } from "react";
import classes from "./ProfessionDropDown.module.css";

const selectStyle = {
  border: `none`,
  borderRadius: `5rem`,
  height: `2.5rem`,
  padding: `0.5rem 1rem`,
};

function ProfessionDropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [customOption, setCustomOption] = useState(false);

  const professions = ["Engineer", "Doctor", "Teacher", "Lawyer", "Others"];

  function professionChangeHandler(event) {
    if (event.target.value !== "Others") {
      setSelectedOption(event.target.value);
      setCustomOption(false);
    } else if (event.target.value === "Others") {
      setCustomOption(true);
    }
  }

  return (
    <>
      <label htmlFor="profession">Profession:</label>
      <select
        style={selectStyle}
        id="profession"
        onChange={professionChangeHandler}
      >
        <option value={selectedOption}>Select a profession</option>
        {professions.map((profession) => (
          <option key={profession} value={profession}>
            {profession}
          </option>
        ))}
      </select>
      {customOption && (
        <input
          className={classes.custom_profession}
          type="text"
          placeholder="Your profession..."
        />
      )}
    </>
  );
}

export default ProfessionDropDown;
