import { useState } from "react";
import WithMaterialUI from "./components/WithMaterialUI";
import "./styles.css";

export default function App() {
  const [valuesList, setValuesList] = useState([]);
  const handleSubmit = (values) => {
    console.log(valuesList);
    setValuesList((r) => [...r, ...valuesList]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <WithMaterialUI handleSubmit={handleSubmit} />
      <div>
        <p>{JSON.stringify(valuesList, null, 2)}</p>
      </div>
    </div>
  );
}
