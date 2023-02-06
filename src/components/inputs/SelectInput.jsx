import React from 'react';
import Select from 'react-select'

function SelectInput({options, onChange, placeholder, className, defaultValue}) {

  const customStyle = {
    control: base => ({
      ...base,
      height: 45,
      minHeight: 35,
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
    <Select 
      cacheOptions
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      isSearchable={false}
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null
      }}
      styles={customStyle}
      className={className}
    />
  );
}

export default SelectInput;
