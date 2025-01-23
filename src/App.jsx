import "./App.css";
import { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <div className="header">
        <h1>Hello world</h1>
      </div>
      <Counter counterValue={count} changedValue={setCount} />
    </>
  );
}

export default App;
