import React from 'react'
import { Navigate } from 'react-router'

export function GoToPath({path}) {
  return <Navigate to={path} />
}
