import React, { useContext } from "react";
import { CalculatorContext } from "./Calculator";

const GetHistory = () => {
  const { setResult, setInputValue } = useContext(CalculatorContext);
  if (!!!sessionStorage.getItem("calcHistory"))
    sessionStorage.setItem("calcHistory", "[]");

  const history = JSON.parse(sessionStorage.getItem("calcHistory"));
  if (history.length < 1) return <p>No history</p>;

  const handleClick = (e) => {
    const [inputVal, res] = [...e.target.closest("p").children].map(
      (x) => x.textContent
    );
    setInputValue(inputVal);
    setResult(res);
  };

  return (
    <>
      <h2>History</h2>
      {history.map((item, index) => {
        const { expression, result } = item;
        return (
          <p key={expression + result + index} onClick={handleClick}>
            <span className="expression">{expression}</span>=
            <span className="result">{result}</span>
          </p>
        );
      })}
    </>
  );
};

export default GetHistory;
