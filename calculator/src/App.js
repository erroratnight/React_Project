import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const oper = ["/","*","+","-","."]

  const updateVal = (value) => {
    if (oper.includes(value) && cal === ""||oper.includes(value) && oper.includes(cal.slice(-1))
    )
    {
      return;
    }


    setCal(cal+value)

    if(!oper.includes(value)){
      setResult(eval(cal+value).toString())

    }
    
  };

  const calculate =()=>{
    setCal(eval(cal).toString())
  }
  const clear =()=>{
    setCal("")
    setResult("")
  }

  const createDigit = () => {
    const Digit = [];
    
    for (let i=1; i < 10; i++) {
      Digit.push(
        <button key={i} onClick={() => updateVal(i.toString())}>
          {i}
        </button>
      );
    }
    return Digit;
  };
  return (
    <div className="App">
      
      <div className="Calculator">
      <div className="Header">
        <h1><b><i><center>Basic Calculator</center></i></b>
        <h6>By - Vishalkumar RameshKumar Chaurasia
        <sub>a.k.a - error_at_night</sub></h6>

        </h1>
      </div>
      <br/>
        <div className="Display">
          {result ? <span>{result}</span> : ""}
          {cal || "0"}
        </div>
        <div className="Operators">
          <button onClick={() => updateVal("+")}>+</button>
          <button onClick={() => updateVal("-")}>-</button>
          <button onClick={() => updateVal("*")}>*</button>
          <button onClick={() => updateVal("/")}>/</button>
          <button onClick={clear}>Clear</button>
        </div>
        <div className="Digits">
          {createDigit()}
          <button onClick={() => updateVal("0")}>0</button>
          <button onClick={() => updateVal(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
