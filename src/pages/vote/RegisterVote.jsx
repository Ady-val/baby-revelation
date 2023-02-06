import React from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutMain from '../../containers/MainLayout'

function RegisterVote() {
  const navigate = useNavigate()
  return (
    <LayoutMain>
      <div className='px-4 py-5 bg-whiteLayout w-5/6 md:w-[30rem] rounded-lg flex flex-col items-center text-fonttext'>
        <div className='text-xl font-medium'>Vota por tu predicción:</div>
        <div className='mt-8 flex w-full justify-around'>
          <button className='h-8 w-32 md:w-40 flex justify-center items-center bg-boyColor2 text-whiteLayout rounded'>Niño</button>
          <button className='h-8 w-32 md:w-40 flex justify-center items-center bg-girlColor2 text-whiteLayout rounded'>Niña</button>
        </div>
        <div className='mt-10 text-xl font-medium'>Llena con tus datos:</div>
        <div className='mt-3 w-[85%] space-y-3'>
          <div className=''>
            <div className='text-lg text-fonttext'>Nombre:</div>
            <input className='h-8 w-full border-2 rounded'></input>
          </div>
          <div className=''>
            <div className='text-lg text-fonttext'>Correo:</div>
            <input className='h-8 w-full border-2 rounded'></input>
          </div>
          <div className=''>
            <div className='text-lg text-fonttext'>Número de celular:</div>
            <input className='h-8 w-full border-2 rounded'></input>
          </div>
          <div className=''>
            <div className='text-lg text-fonttext'>Tarjeta o cuenta bancaria <span className='text-sm'>...en caso de que ganes</span>:</div>
            <input className='h-8 w-full border-2 rounded'></input>
          </div>
        </div>
        <div className='mt-8'>
          <button onClick={() => navigate('/voto-realizado')} className='h-8 w-40 bg-fonttext text-whiteLayout justify-center items-center rounded'>Submit</button>
        </div>
      </div>
    </LayoutMain>
  )
}

export default RegisterVote