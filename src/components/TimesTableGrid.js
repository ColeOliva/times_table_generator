import jsPDF from "jspdf";
import React from "react";

function TimesTableGrid({ tableData }) {
  const { number, table } = tableData;

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Times Table of ${number}`, 10, 10);
    table.forEach((row, index) =>
      doc.text(
        `${number} x ${row.multiplier} = ${row.result}`,
        10,
        20 + index * 10
      )
    );
    doc.save(`Times_Table_${number}.pdf`);
  };

  return (
    <div>
      <h2>Times Table of {number}</h2>
      <ul>
        {table.map((row, index) => (
          <li key={index}>
            {number} x {row.multiplier} = {row.result}
          </li>
        ))}
      </ul>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default TimesTableGrid;
