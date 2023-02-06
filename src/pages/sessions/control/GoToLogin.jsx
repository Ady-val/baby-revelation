import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { request } from '../../../api/request';
import { useAuth } from "../../../auth/AuthFunctions";

/**
 * If the user is not logged in, redirect to the login page
 * @returns The Navigate component is being returned.
 */
function GoToLogin() {
  const auth = useAuth();
  const req = request();
  useEffect(() => {
    req.post('/api/session/new-entrie').then(res => {}).catch(err => {
      console.log(err);
    })
  })
  if (!auth.data.rol) {
    console.log(auth.data);
    return <Navigate to="/sign-up"  />;
  }
  return <Navigate to="/panel"  />;
}

export default GoToLogin;
