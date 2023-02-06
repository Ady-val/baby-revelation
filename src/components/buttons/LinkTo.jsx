import React from 'react'
import { Link } from 'react-router-dom'

function LinkTo({text, to, disabled, className}) {
  return (
    <Link
      to={to}
      className={`adjustable-button flex justify-center items-center ${className}`}
    >{text}</Link>
  )
}

export default LinkTo