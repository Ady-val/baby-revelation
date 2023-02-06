import React from 'react'
import Select from 'react-select'
import Load from '../loaders/Load';
import TooltipInfo from '../misc/TooltipInfo';

export function SearchSelect({title, tooltip, options, placeholder, onChange, activeLabel, loading, className, defaultOptions, defaultValue, value }) {

  const customStyle = {
    control: base => ({
      ...base,
      minHeight: 45,
      boxShadow: "none",
      border: "none"
    }),
    menu: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && "#4FC6DB",
      color: state.isFocused && "white",
    })
  }
  
  return (
    <div className="w-full">
      <div className="flex items-center">
        {title && <div className="text-base font-medium text-fonttext mb-2">{title}</div>}
        {tooltip && <div className="ml-2 mb-2 text-fonttext"><TooltipInfo text={tooltip} /></div>}
        {loading && <Load color="primary" />}
      </div>
      <label className="relative block">
        <span className="sr-only">Input</span>
        {activeLabel &&
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-fonttext">
            Typing <span className="text-gray-400">&nbsp;&nbsp;l</span>
          </span>
        }
        <Select
          isMulti
          options={options}
          defaultOptions={defaultOptions}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          components={{
            IndicatorSeparator: () => null
          }}
          styles={customStyle}
          className={`single-input ${className}`}
        />
      </label>
    </div>
  )
}

export function SearchSelectUnit({title, tooltip, options, placeholder, onChange, activeLabel, loading, className, defaultOptions, defaultValue, value }) {

  const customStyle = {
    control: base => ({
      ...base,
      minHeight: 45,
      boxShadow: "none",
      border: "none"
    }),
    menu: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && "#4FC6DB",
      color: state.isFocused && "white",
    })
  }
  
  return (
    <div className="w-full">
      <div className="flex items-center">
        {title && <div className="text-base font-medium text-fonttext mb-2">{title}</div>}
        {tooltip && <div className="ml-2 mb-2 text-fonttext"><TooltipInfo text={tooltip} /></div>}
        {loading && <Load color="primary" />}
      </div>
      <label className="relative block">
        <span className="sr-only">Input</span>
        {activeLabel &&
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-fonttext">
            Typing <span className="text-gray-400">&nbsp;&nbsp;l</span>
          </span>
        }
        <Select
          options={options}
          defaultOptions={defaultOptions}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          components={{
            IndicatorSeparator: () => null
          }}
          styles={customStyle}
          className={`single-input ${className}`}
        />
      </label>
    </div>
  )
}
