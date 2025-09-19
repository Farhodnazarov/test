import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Farxod");

  const changeName = () => {
    if (name === "Farrux") {
      setName("Farxod");
    } else {
      setName("Farrux");
    }
    console.log(name);
  };
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
