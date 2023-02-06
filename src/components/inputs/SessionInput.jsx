import React from 'react';

function SessionInput({title, placeholder, onChange, type, onKeyDown, value, colorText}) {
  return (
    <div>
      {title && <div className={`font-bold text-xs text-sessions mt-3 mb-2 ${colorText}`}>{title}</div>}
      <div className="flex">
        <input
          onChange={onChange}
          onKeyDown={onKeyDown}
          type="text"
          minLength="4"
          maxLength="40"
          autoComplete="off"
          placeholder={placeholder}
          type={type}
          value={value}
          className="h-7 border border-[#2B417C] text-sm rounded p-2 placeholder:text-gray-300"
        />
      </div> 
    </div>
  );
}

export default SessionInput;
