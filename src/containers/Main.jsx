import React from 'react'
import { Outlet } from 'react-router-dom'
import CloudPattern from '../components/other/CloudPattern'

export default function Main() {
  return (
    <div className="static w-full h-full overflow-hidden flex">
      <div className='h-full w-1/2 bg-girlColor' />
      <div className='h-full w-1/2 bg-boyColor' />
      {/* <div className="absolute w-full h-full overflow-hidden flex items-center">
        <CloudPattern />
      </div> */}
      <div className="absolute w-full h-full overflow-auto bg-cloud">
        <Outlet />
      </div>
    </div>
  )
}
