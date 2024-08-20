import { useState } from "react";
import { evaluate } from "mathjs";

const useCalculator = () => {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);

  const handleKey = (key) => {
    switch (key) {
      case "=":
        handleEqual();
        break;
      case "C":
        handleClear();
        break;
      case "<-":
        handleBackspace();
        break;
      default:
        appendToDisplay(key);
        break;
    }
  };

  const appendToDisplay = (value) => {
    setDisplay((prev) => {
      if (prev === "Error") {
        return isNaN(value) ? "Error" + value : value;
      }
      if (prev === "0" && value !== ".") {
        return value;
      }
      return prev + value;
    });
  };

  const handleEqual = () => {
    try {
      const expression = display.replace(/\^/g, "**");
      const result = evaluate(expression);
      setHistory((prevHistory) => [...prevHistory, `${display} = ${result}`]);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleBackspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return {
    display,
    history,
    handleKey,
  };
};

export default useCalculator;
