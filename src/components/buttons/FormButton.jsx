import React from 'react';

function FormButton({text, onClick, disabled}) {
  return (
    <div>
      <button 
        onClick={onClick} 
        disabled={disabled} 
        className="button"
      >
        {text}
      </button>
    </div>
  );
}

export default FormButton;
