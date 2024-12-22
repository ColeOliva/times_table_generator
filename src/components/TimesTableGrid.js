import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function TimesTableGrid({ tableData }) {
  const { number, table } = tableData;
  const navigate = useNavigate();

  return (
    <div>
      <h2>Times Table of {number}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
          rowGap: "30px",
        }}
      >
        {table.map((row, index) => (
          <div
            key={index}
            className="numberBorder"
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              borderBottom: "1px solid #000",

            }}
          >
            <div className="firstNum">{`${number} `}</div>
            <div className="secondNum">{`x ${row.multiplier}`}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
}

export default TimesTableGrid;
