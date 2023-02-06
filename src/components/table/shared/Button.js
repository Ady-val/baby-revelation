import React from 'react'
import { classNames } from './Utils'

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-2 py-2 border-2 border-gray-300 rounded-xl text-sm font-medium text-gray-500",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}
export function PageNumbersButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-3 py-2 text-sm font-medium",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}

