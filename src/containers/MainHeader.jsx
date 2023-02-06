import React from 'react';

function MainHeader({children}) {
  return (
    <div className="flex w-full my-10 h-16">
      {children}
    </div>
  );
}

export default MainHeader;
