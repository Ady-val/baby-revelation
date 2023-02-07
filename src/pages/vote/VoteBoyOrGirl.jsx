import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { request } from '../../api/request'
import LayoutMain from '../../containers/MainLayout'
import BabyLoad from '../../components/loaders/BabyLoad '

function VoteBoyOrGirl() {
  const req = request()
  const [boyPercentage, setBoyPercentage] = useState('50')
  const [girlPercentage, setGirlPercentage] = useState('50')
  const [loading, setLoading] = useState(true)

  useEffect(async() => {
    try {
      await req.get('/api/votes/score').then(res => {
        console.log(res);
        const { boyVotesPercentage, girlVotesPercentage } = res.data
        setBoyPercentage(boyVotesPercentage)
        setGirlPercentage(girlVotesPercentage)
        setLoading(false)
      })
    } catch (error) {
      
    }
  })
  return (
    <LayoutMain>
      <div className='text-5xl md:text-6xl font-semibold text-whiteLayout'>
        ¿<span className='text-boyColor'>Niño</span> o <span className='text-girlColor'>Niña</span>?
      </div>
      <div className='mt-6 mx-8 p-4 w-5/6 md:w-[32rem] text-slate-500 text-lg font-semibold text-center bg-white bg-opacity-80 rounded-lg' >
        <span className='text-2xl'>Participa con $250 votando por el sexo del bebé de Cynthia y Adalberto &lt;3 </span>
        <br /><br />
        Las votaciones estarán abiertas hasta el día 11 de Mayo del 2023, el 20% del dinero recaudado será para gastos para el/la bebé y el 80% será repartido entre los ganadores!
      </div>
      <div className='mt-8 flex flex-col items-center w-full'>
        <div className='text-3xl text-slate-500 font-medium'>Marcador</div>
        {loading ? (
          <div><BabyLoad /></div>
        ) : (
          <div className='relative mt-3 h-16 w-5/6 md:w-[40rem] flex border-4 rounded-lg border-whiteLayout'>
            <div className={`h-full w-[${girlPercentage}%] bg-girlColor`} />
            <div className='grow bg-boyColor' />
            <div className='absolute top-0 left-0 w-full h-full flex justify-between items-center px-2 text-lg text-slate-500'>
              <div>Niña ({girlPercentage}%)</div>
              <div>Niño ({boyPercentage}%)</div>
            </div>
          </div>
        )}
      </div>
      {!loading && <Link to='/vota' className='mt-8 h-8 w-40 flex justify-center items-center bg-whiteLayout hover:text-boyColor2 rounded text-girlColor2'>Vota!</Link>}
      <Link to='/blog' className='mt-12 h-8 w-40 flex justify-center items-center bg-whiteLayout hover:text-boyColor2 rounded text-girlColor2'>Ver blog</Link>
    </LayoutMain>
  )
}

export default VoteBoyOrGirl