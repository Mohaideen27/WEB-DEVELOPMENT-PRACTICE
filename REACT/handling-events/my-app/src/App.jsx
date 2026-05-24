import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

function App() {
  // const [name, setName] = useState("Samiee");
  const [form, setform] = useState({ email: "", phone: "" });
  const handleClick = () => {
    alert("Hey I am Clicked");
  };
  // const handleMouseOver = () => {
  //   alert("Dont touch me");
  // };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div className="red">I am a red div</div>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
