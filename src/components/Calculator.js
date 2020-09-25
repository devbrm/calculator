import React, { useEffect, useState, useRef } from "react";
import GetHistory from "./GetHistory";
import handleSessionStorage from "../library/handleSessionStorage";
import CreateInputButtons from "./CreateInputButtons";
import CreateOprators from "./CreateOprators";
export const CalculatorContext = React.createContext();

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const resultRef = useRef(null);
  const historyRef = useRef(null);
  const stateRef = useRef(inputValue);
  const answerRef = useRef(result);

  useEffect(() => {
    sessionStorage.setItem("calcHistory", "[]");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    stateRef.current = inputValue;
    answerRef.current = result;
  }, [inputValue, result]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (isNotValidInput(value)) return;

    setInputValue(value);
  };

  const isNotValidInput = (value) => {
    //to filter the valid inputs
    if (value.match(/[^\d\/\+\*\%\-\.]/g)) return true;
    // to filter repeating operators, **+, and +* or *-
    if (
      value.match(
        /[\/\+\%\-\.]{2,}|[\*]{3,}|[\/\+\%\-\.]\*|\*[\/\+\%\-\.]|[\/\+\%\-\.\*\d]*\.{2,}[\/\+\%\-\.\*\d]/
      )
    )
      return true;
  };

  const handleClick = (e) => {
    const name = e.target.closest("button").name;
    if (isNotValidInput(inputValue + name)) return;
    setInputValue((preVal) => preVal + name);
  };

  const evaluateTheResult = () => {
    try {
      const calcResult = eval(stateRef.current);
      if (isNaN(calcResult)) throw new Error("Illegal input");
      const newHistoryObj = {
        expression: stateRef.current,
        result: calcResult,
      };
      handleSessionStorage(newHistoryObj);
      setResult(calcResult);
      historyRef.current.lastChild.scrollIntoView({ behaviour: "smooth" });
      resultRef.current.classList.remove("warning");
    } catch (error) {
      setResult(`😰${error.message}`);
      resultRef.current.classList.add("warning");
    }
  };

  const handleBackspace = () =>
    setInputValue((prev) => prev.slice(0, prev.length - 1));

  const handleCE = () => setInputValue("");

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        return evaluateTheResult();

      default:
        return;
    }
  };

  return (
    <section id="calculator">
      <CalculatorContext.Provider
        value={{ inputValue, setInputValue, result, setResult }}
      >
        <h1>Nice Calculator</h1>
        <div className="mainContainer">
          <div className="calContainer">
            <input onChange={handleChange} value={inputValue} />
            <div ref={resultRef} className="result">
              {result}
            </div>
            <div className="buttonsContainer">
              <div className="operatorButtons">
                <CreateOprators
                  handleClick={handleClick}
                  evaluateTheResult={evaluateTheResult}
                  handleBackspace={handleBackspace}
                  handleCE={handleCE}
                />
              </div>
              <div className="inputButtons">
                <CreateInputButtons handleClick={handleClick} />
              </div>
            </div>
          </div>
          <div ref={historyRef} className="history">
            <GetHistory />
          </div>
        </div>
      </CalculatorContext.Provider>
    </section>
  );
}

export default Calculator;
