import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const History = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { history } = location.state || { history: [] };

  const goBackToCalculator = () => {
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg p-4">
      <h1 className="text-xl font-bold mb-4">Calculation History</h1>
      <ul>
        {history.length > 0 ? (
          history.map((entry, index) => <li key={index}>{entry}</li>)
        ) : (
          <li>No history available.</li>
        )}
      </ul>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={goBackToCalculator}
      >
        Back to Calculator
      </button>
    </div>
  );
};

export default History;
