import React from 'react';

const LayoutMain = ({children}) => {
  return (
    <div className="pt-16 h-full flex flex-col items-center">
      {children}
    </div>
  )
}

export default LayoutMain