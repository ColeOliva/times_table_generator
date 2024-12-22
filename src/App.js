import React, { useState } from "react";
import TimesTableForm from "./components/TimesTableForm";
import TimesTableGrid from "./components/TimesTableGrid";
import "./styles.css";

function App() {
  const [table, setTable] = useState(null);

  const handleGenerate = (number) => {
    const generatedTable = Array.from({ length: 10 }, (_, i) => ({
      multiplier: i + 1,
      result: number * (i + 1),
    }));
    setTable({ number, table: generatedTable });
  };

  return (
    <div className="App">
      <h1>Times Table Generator</h1>
      <TimesTableForm onGenerate={handleGenerate} />
      {table && <TimesTableGrid tableData={table} />}
    </div>
  );
}

export default App;
