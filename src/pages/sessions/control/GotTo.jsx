import React from 'react';
import { Navigate } from 'react-router';

function GoTo({ path }) {
  return <Navigate to={path} />;
}

export default GoTo;
