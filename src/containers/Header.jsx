import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io"
import { useAuth } from '../auth/AuthFunctions'

export const Header = ({children}) => {
  const auth = useAuth()
  const [ close, setClose ] = useState(false)
  return (
    <div className='h-full flex flex-col'>
      {auth.data.rol == 'user' && (
        <div className={`${close ? 'h-0' : 'h-8'} transition-height px-4 bg-primary text-menu font-medium flex items-center justify-between`}>
          <div>¿Deseas desbloquear todos los contactos de los prospectos? Hazte Premium dando click <Link to='/licencia' className='underline underline-offset-1'>aquí</Link>!!!</div>
          <button onClick={() => setClose(true)} className="text-xl">
            <IoIosClose/>
          </button>
        </div>
      )}
      <div className="bg-menu drop-shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
        <div className="w-full">
          <div className="flex flex-row items-center h-16">
            {/* Left */}
            <div className="flex items-center w-1/6 justify-start pl-5">
              <Logo />
            </div>
            {/* Center */}
            <div className="flex items-center w-4/6 justify-start">
              <div className="w-3/6">
                {/* <SearchHeader /> */}
              </div>
              <div className="w-3/6"></div>
            </div>
            {/* Right */}
            <div className="flex items-center w-1/6 justify-end pr-5">
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex overflow-y-hidden">
        {children}
      </div>
    </div>
  )
}
