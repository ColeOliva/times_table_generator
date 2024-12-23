import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../styles.css";

function TimesTableGrid({ tableData }) {
  const { number, table } = tableData;
  const navigate = useNavigate();
  const pdfRef = useRef(null); // Reference to the div containing the table

  const generatePDF = async () => {
    const element = pdfRef.current;

    // Capture the element as an image using html2canvas
    const canvas = await html2canvas(element, { scale: 2 }); // Scale for better quality
    const imgData = canvas.toDataURL("image/png");

    // Create a PDF and add the image
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`TimesTable-${number}.pdf`);
  };

  return (
    <div>
      <div ref={pdfRef} style={{ padding: "20px", backgroundColor: "#fff" }}>
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
      <button
        onClick={generatePDF}
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          padding: "10px 20px",
          backgroundColor: "#28A745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default TimesTableGrid;
