import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { indexToLetter } from "../../helpers/data-transforms";

function MultiSelectInput({ data, onChange }) {
  const [selectedOption, setSelectedOption] = useState();

  const onClick = (value) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col space-y-2">
      {data.map((row, i) => (
        <button
          key={i}
          onClick={() => onClick(row.value)}
          className={`bg-[#62BBCF] items-center hover:bg-[#58b1c5] px-2 flex justify-between ${
            selectedOption == row.value
              ? "border border-white"
              : "border border-transparent"
          }`}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center rounded my-2 mr-2 w-4 h-4 text-xs ${
                selectedOption == row.value
                  ? "bg-white text-[#62BBCF]"
                  : "text-white border border-white"
              }`}
            >
              {indexToLetter(i)}
            </div>
            <div className="text-white">{row.label}</div>
          </div>
          <div className="flex items-center mr-1">
            {selectedOption == row.value && (
              <FaCheck className="text-xs text-white" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default MultiSelectInput;
