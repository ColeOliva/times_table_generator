import React, { useState } from "react";

function TimesTableForm({ onGenerate }) {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(number) && number > 0) {
      onGenerate(Number(number));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number">Times Table:</label>
      <input
        type="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        min="1"
        required
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default TimesTableForm;
