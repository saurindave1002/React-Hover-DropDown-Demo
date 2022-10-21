import "./styles.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("Pick Your Favourite Chocolate");
  return (
    <div className="App">
      <br />
      <br />
      <h1 className="font-color">
        <u> Chocolate Picker </u>
      </h1>

      <Dropdown selected={selected} setSelected={setSelected} />
      <h3 className="font-color">{"You Love: " + selected}</h3>
    </div>
  );
}
