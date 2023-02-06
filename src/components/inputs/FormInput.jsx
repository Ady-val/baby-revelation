import React from 'react';
import TooltipInfo from '../misc/TooltipInfo';

function FormInput({title, tooltip, placeholder, onChange, onInput, pattern, type, minLength, maxLength, disabled, className, value, activeLabel,}) {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {title && <div className="text-base font-medium text-fonttext mb-2">{title}</div>}
        {tooltip && <div className="ml-2 mb-2 text-fonttext"><TooltipInfo text={tooltip} /></div>}
      </div>
      <label className="relative block">
        <span className="sr-only">Input</span>
        {activeLabel &&
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-fonttext">
            Typing <span className="text-gray-400">&nbsp;&nbsp;l</span>
          </span>
        }
        <input
          value={value}
          onChange={onChange}
          onInput={onInput}
          pattern={pattern}
          value={value}
          type={type}
          minLength={minLength}
          maxLength={maxLength ?? 40}
          disabled={disabled}
          autoComplete="off"
          placeholder={placeholder}
          className={`single-input block py-2 pr-3 ${ activeLabel ? "pl-[72px]" : "pl-3" } ${disabled && "bg-gray-200"} ${className}`}
        />
      </label>
    </div>
  );
}

export default FormInput;
