import React from 'react';

const Sessions = ({children}) =>  {
  return (
    <div className="static w-full flex flex-col justify-start items-center py-16 bg-zinc-50 overflow-y-auto">
      <div className="flex w-[64rem] h-[32rem] rounded-xl drop-shadow-2xl bg-gradient-to-t via-menu from-primary to-menu">
        <div className=" flex justify-center items-center w-1/2">
          <div className='w-1/2 h-1/2 reference-border' />
        </div>
        <div className="px-10 py-10 w-1/2 flex flex-col items-start justify-center">
          <div className="grow flex items-center">
          {children}
          </div> 
        </div>
      </div>
      <footer className='absolute bottom-0 w-full h-16 flex justify-center items-center text-fonttext'>© Copyright 2022. ALEX MKT - All Rights Reserved.</footer>
    </div>
  );
}

export default Sessions;