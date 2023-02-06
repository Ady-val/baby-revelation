import React from 'react';

const TinyText = ({children}) => {
  return (
    <div className="text-xs font-medium text-secondary">
      {children}
    </div>
  )
}

export default TinyText;
