import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Content from "./component/Content";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logotext="Naa dan" />
      <div clasName="value">{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
      {/* hey sameer */}
      <Content />
    </div>
  );
}

export default App;
