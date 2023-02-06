import React from 'react'
import { Link } from 'react-router-dom'
import LayoutMain from '../../containers/MainLayout'

function VoteBoyOrGirl() {
  return (
    <LayoutMain>
      <div className='text-5xl md:text-6xl font-semibold text-whiteLayout'>
        ¿<span className='text-boyColor2'>Niño</span> o <span className='text-girlColor2'>Niña</span>?
      </div>
      <div className='mt-6 mx-8 p-4 w-5/6 md:w-[32rem] text-whiteLayout text-lg font-medium text-center bg-white bg-opacity-25 rounded-lg' >
        <span className='text-2xl'>Participa en la quinela votando por el sexo del bebé de Cynthia y Adalberto &lt;3 </span>
        <br /><br />
        Las votaciones estarán abiertas hasta el día 11 de Mayo del 2023, el 20% del dinero recaudado será para gastos de la criatura y el 80% será repartido entre los ganadores!
      </div>
      <div className='mt-8 flex flex-col items-center w-full'>
        <div className='text-3xl text-whiteLayout font-medium'>Marcador</div>
        <div className='relative mt-3 h-16 w-5/6 md:w-[40rem] border-4 rounded-lg border-whiteLayout'>
          <div className='h-full w-[58%] bg-girlColor' />
          <div className='grow bg-boyColor' />
          <div className='absolute top-0 left-0 w-full h-full flex justify-between items-center px-2 text-lg text-whiteLayout'>
            <div>Niña (58%)</div>
            <div>Niño (42%)</div>
          </div>
        </div>
      </div>
      <Link to='/vota' className='mt-8 h-8 w-40 flex justify-center items-center bg-whiteLayout hover:text-boyColor2 rounded text-girlColor2'>Vota!</Link>
    </LayoutMain>
  )
}

export default VoteBoyOrGirl