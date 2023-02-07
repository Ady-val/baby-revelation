import React from 'react';

export default function SimpleLoader() {
  return (
    <div className='flex'>
      <div className='h-2.5 w-2.5 bg-boyColor2 rounded-full mr-1 animate-bounce'></div>
      <div className='h-2.5 w-2.5 bg-whiteLayout rounded-full mr-1 animate-bounce200'></div>
      <div className='h-2.5 w-2.5 bg-girlColor2 rounded-full animate-bounce400'></div>
    </div>
  )
}
