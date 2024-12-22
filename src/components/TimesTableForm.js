import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TimesTableForm({ onGenerate }) {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

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
        style={{ margin: "10px", padding: "5px", fontSize: "16px" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#28A745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate
      </button>
    </form>
  );
}

export default TimesTableForm;
