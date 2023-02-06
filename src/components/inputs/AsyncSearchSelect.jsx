import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { request } from '../../api/request';

export default function SearchSelect(props) {
  const req = request()
  const {
    url,
    method,
    params,
    onChange,
    defaultValue,
    defaultOptions,
    ref,
    placeholder
  } = props;

  const formatResults = (results) => {
    if (!results || !Array.isArray(results)) return;

    const formattedResults = results.map(
      ({ id, name, audience_size, type }) => {
        const label = `${name} | Interés`;

        return {
          value: id,
          id,
          name,
          label,
          type,
        };
      },
    );

    return formattedResults;
  };

  const promiseOptions = async (inputValue) => {
    try {
      const { data } = await req({
        url,
        method,
        params: {
          ...params,
          reference: inputValue,
        },
      });

      const results = data.data.data;

      const formattedResults = formatResults(results);

      return formattedResults;
    } catch (err) {
      console.error(err);
    }
  };

  const customStyle = {
    control: base => ({
      ...base,
      // height: 45,
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
    <AsyncSelect
      isMulti
      cacheOptions
      loadOptions={promiseOptions}
      defaultOptions={formatResults(defaultOptions)}
      openMenuOnFocus
      defaultValue={defaultValue}
      onChange={onChange}
      ref={ref}
      placeholder={placeholder}
      className="single-input"
      styles={customStyle}
    />
  );
}
