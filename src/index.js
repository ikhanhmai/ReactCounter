import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = increment => {};
  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
