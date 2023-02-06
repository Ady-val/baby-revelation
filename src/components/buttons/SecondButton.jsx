import React from 'react';

function SecondButton({text, onClick, disabled, className}) {
  return (
      <button 
        onClick={onClick} 
        disabled={disabled} 
        className={`adjustable-button-2 ${className}`}
      >
        {text}
      </button>
  );
}

export default SecondButton;
