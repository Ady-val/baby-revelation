import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../../../auth/AuthFunctions'

export function GoToUserType() {
  const { data } = useAuth()
  const path = (data.userType == 'real-state' || data.userType == 'financial-broker' || data.userType == 'insurance-salesman' || data.userType == 'employer') ? '/panel/prospectos/personas' : '/panel/cursos'
  return <Navigate to={path} />
}