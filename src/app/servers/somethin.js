import React, { useState } from "react";
export default function DataInput(saveData) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [student, setStudent] = useState(false);
  console.log(name, major, year, student);
  const handleSaveClick = () => {
    
    let isError = false;

    isError = name.trim().length === 0;

    const yearTest = Number(String(year).trim());
    if (!isError) {
    
      isError = isNaN(yearTest) && yearTest >= 0; // Conditionals short-circuit
    }
    console.log("Error:", isError);
    if (!isError) {
    
      saveData({ name, year: yearTest, major, student });
      setName("");
      setMajor("");
      setYear("");
      setStudent(false);
    }
  };
  console.log("State:", name, major, student, year);
  return (
    <div id="div">
      <h2>Data Entry</h2>
      <label htmlFor="StudentBox">Are you a student? </label>
      <input
        id="StudentBox"
        type="checkbox"
        checked={student}
        onChange={(evt) => setStudent(evt.target.checked)}
      />
      <div>
        <label htmlFor="NameInput">What is your name? </label>
        <input
          id="NameInput"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="MajorInput">What is your major? </label>
        <input
          id="MajorInput"
          value={major}
          onChange={(evt) => setMajor(evt.target.value)}
        />
        <br></br>
        <label htmlFor="YearInput">What is your graduation year? </label>
        <input
          id="YearInput"
          value={year}
          onChange={(evt) => setYear(evt.target.value)}
        />
      </div>
      <div></div>
      <div>
        <button onClick={handleSaveClick}>Submit</button>
      </div>
      <hr />
    </div>
  );
}