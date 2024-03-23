import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <h1 className="text-7xl text-center">Vite + React</h1>
      <PriceOptions />
    </>
  );
}

export default App;
