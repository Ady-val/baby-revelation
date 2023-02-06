import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const actualPath = (path) => {
  const location = useLocation()
  return location.pathname == path
}

function DoubleNavButtons({leftText, leftPath, rightText, rightPath}) {
  return (
    <div className="flex h-[2.5rem] bg-menu border border-gray-300 rounded-md items-center">
        <Link to={leftPath} className={`w-48 text-sm text-center ${actualPath(leftPath) ? 'text-primary font-medium' : 'text-secondary'}`}>{ leftText }</Link>
        <div className="w-2 text-xl text-gray-300">|</div>
        <Link to={rightPath} className={`w-48 text-sm text-center ${actualPath(rightPath) ? 'text-primary font-medium' : 'text-secondary'}`}>{ rightText }</Link>
    </div>
  );
}

export default DoubleNavButtons;
