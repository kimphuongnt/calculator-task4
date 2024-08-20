import React from "react";
import useCalculator from "../hooks/useCalculator";
import Keypad from "./Keypad";
import Display from "./Display";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const { display, history, handleKey } = useCalculator();
  const navigate = useNavigate();

  const goToHistory = () => {
    navigate("/history", { state: { history } });
  };

  return (
    <div>
      <Display value={display} />
      <Keypad onKeyClick={handleKey} />
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={goToHistory}>View History</button>
    </div>
  );
};

export default Calculator;
