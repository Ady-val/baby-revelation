import React from 'react';

/**
 * It returns a button element with the text, onClick, disabled, className, and type props
 * @returns A button element with the text, onClick, disabled, className, and type props.
 */
function Button({text, onClick, disabled, className, type}) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`adjustable-button ${className}`}
    >
      {text}
    </button>
  );
}

export function ButtonDelete({text, onClick, disabled, className, type}) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`delete-button ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
