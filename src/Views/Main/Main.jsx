import React, { useState } from "react";
import FormInvestment from "./Partials/FormInvestment";
import TableInvestment from "./Partials/TableInvestment";

function Main() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (inputIdentifier, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +value,
      };
    });
  };

  return (
    <div className="flex gap-x-4">
      <FormInvestment userInput={userInput} onChange={handleInputChange} />
      <TableInvestment input={userInput} />
    </div>
  );
}

export default Main;
