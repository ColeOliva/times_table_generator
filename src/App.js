import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import TimesTableForm from "./components/TimesTableForm";
import TimesTableGrid from "./components/TimesTableGrid";
import "./styles.css";

function App() {
  const [table, setTable] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>Times Table Generator</h1>
        <Routes>
          <Route path="/" element={<HomePage setTable={setTable} />} />
          <Route
            path="/table"
            element={table && <TimesTableGrid tableData={table} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage({ setTable }) {
  const navigate = useNavigate();

  const handleGenerate = (number) => {
    const table = Array.from({ length: 48 }, (_, index) => {
      const multiplier = Math.round(Math.random() * 12);
      return { multiplier, result: number * multiplier };
    });
    setTable({ number, table });
    navigate("/table"); // Navigate to the table page
  };

  return <TimesTableForm onGenerate={handleGenerate} />;
}

export default App;
