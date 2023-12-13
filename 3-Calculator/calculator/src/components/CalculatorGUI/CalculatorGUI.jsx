import { useState } from "react";
import "./style.css";

/* eslint-disable */

export const CalculatorGUI = () => {
  const [number, setNumber] = useState("");
  const [oldNumber, setoldNumber] = useState();
  const [operatorSaved, setOperatorSaved] = useState();
  const [expression, setExpression] = useState("");

  function handleCreateNumber({ target: { value } }) {
    if (number == "0") {
      setNumber(value);
    } else {
      setNumber(number + value);
    }
    if (!number) {
      setExpression(expression + number);
    } else {
      setExpression(number + value);
    }
  }

  function handleOperation({ target: { value: operator } }) {
    
    if(operator == "r"){
      const result = Math.sqrt(number || oldNumber) 
      setExpression(result)
      setoldNumber(result)
      setNumber('')
      return
    }


    if (!number) {
      setExpression(`${oldNumber} ${operator} `);
    } else {
      setExpression(`${number} ${operator} `);
      setoldNumber(number);
      setNumber("");
    }
    setOperatorSaved(operator);
  }

  function handleCalculate() {
    let result = null;
    switch (operatorSaved) {
      case "+":
        result = parseFloat(number) + parseFloat(oldNumber);
        break;
      case "-":
        result =  parseFloat(oldNumber) - parseFloat(number)
        break;
      case "/": //não permitir divisão por zero
        if(number == "0"){
          setExpression("Inválido")
          return
        }
        result = parseFloat(oldNumber) / parseFloat(number)
        break;
      case "x":
        result = parseFloat(number) * parseFloat(oldNumber);
        break;
      case "r":
        result = Math.sqrt(number)
        break;
      case "^":
        result = Math.pow(oldNumber, number)
        break;
    }
    setoldNumber(result)
    setExpression(result);
    setNumber('');
  }

  function handleClear(){
    setExpression('')
    setNumber('')
    setOperatorSaved('')
    setoldNumber('')
  }

  function handleGoBack(){
    if(operatorSaved){
      setOperatorSaved('')
      setExpression(oldNumber)
    }
    if(number){
      if(number.length == 1){
        setNumber('0')
        setExpression('0')
        return
      }
      const numb = number.substring(0, number.length - 1)
      console.log(numb)
      setNumber(numb)
      setExpression(numb)
    }
  }

  return (
    <main className="calculator-panel">
      <div className="computed-exp" id="computed-exp">
        {expression ? expression : "Digite um valor"}
      </div>
      <div className="result-panel" id="result-panel">
        {number}
      </div>
      <div className="controllers">
        <div onClick={() => handleClear()} className="controller">C</div>
        <div
          onClick={(e) => handleOperation({"target" : {"value": "^"}})}
          value={"^"}
          className="controller"
        >
          ^
        </div>
        <button
          onClick={() => handleOperation({"target" : {"value": "r"}})}
          value={"r"}
          className="controller"
        >
          <svg
            fill="#FFFFFF"
            height="32px"
            width="32px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 48 48"
            xml:space="preserve"
            stroke="#FFFFFF"
            value={"r"}
          >
            <g value={"r"} id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M35.494,0c-0.43,0-0.811,0.273-0.947,0.681L19.734,44.64L9.35,27.482C9.169,27.183,8.844,27,8.494,27h-8v2h7.437 l11.208,18.518C19.321,47.819,19.646,48,19.994,48c0.036,0,0.072-0.002,0.109-0.006c0.387-0.043,0.714-0.306,0.838-0.675L36.213,2 h11.293V0H35.494z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={(e) => handleOperation(e)}
          value={"/"}
          className="controller"
        >
          ÷
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={7}
          className="controller"
        >
          7
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={8}
          className="controller"
        >
          8
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={9}
          className="controller"
        >
          9
        </button>
        <button
          onClick={(e) => handleOperation(e)}
          value={"x"}
          className="controller"
        >
          ×
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={4}
          className="controller"
        >
          4
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={5}
          className="controller"
        >
          5
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={6}
          className="controller"
        >
          6
        </button>
        <button
          onClick={(e) => handleOperation(e)}
          value={"-"}
          className="controller"
        >
          -
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={1}
          className="controller"
        >
          1
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={2}
          className="controller"
        >
          2
        </button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={3}
          className="controller"
        >
          3
        </button>
        <button
          onClick={(e) => handleOperation(e)}
          value={"+"}
          className="controller"
        >
          +
        </button>
        <button onClick={(e) => handleCreateNumber(e)} value={"."} className="controller">.</button>
        <button
          onClick={(e) => handleCreateNumber(e)}
          value={0}
          className="controller"
        >
          0
        </button>
        <button onClick={() => handleGoBack()} className="controller">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0858 7H11.5H27.5H28.5V8V24V25H27.5H11.5H11.0858L10.7929 24.7071L2.79286 16.7071L2.08575 16L2.79286 15.2929L10.7929 7.29289L11.0858 7ZM11.9142 9L4.91418 16L11.9142 23H26.5V9H11.9142ZM15.5 11.5858L16.2071 12.2929L18.5 14.5858L20.7929 12.2929L21.5 11.5858L22.9142 13L22.2071 13.7071L19.9142 16L22.2071 18.2929L22.9142 19L21.5 20.4142L20.7929 19.7071L18.5 17.4142L16.2071 19.7071L15.5 20.4142L14.0858 19L14.7929 18.2929L17.0858 16L14.7929 13.7071L14.0858 13L15.5 11.5858Z"
              fill="white"
            />
          </svg>
        </button>
        <button onClick={() => handleCalculate()} className="controller">
          =
        </button>
      </div>
    </main>
  );
};
