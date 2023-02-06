import React from 'react'
import cloud from '../../../public/img/imm.png'
import cloudPink from '../../../public/img/clouds-blue.png'
import cloudBlue from '../../../public/img/clouds-pink.png'

function CloudPattern() {
  return (
    <div className='w-full pt-[20rem]'>
      {/* Coloreado con solo una linea */}
      {/* <div className='flex justify-center'>
        <img src={cloudPink} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudPink} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudPink} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudPink} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudBlue} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudBlue} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudBlue} className='object-cover h-[20rem] w-[30rem]' />
        <img src={cloudBlue} className='object-cover h-[20rem] w-[30rem]' />
      </div> */}
      {/* Blanco una sola linea */}
      <div className='flex'>
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
      </div>
      {/* Blanco tapizado */}
      {/* <div className='flex'>
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
      </div>
      <div className='flex'>
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
      </div>
      <div className='flex'>
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
        <img src={cloud} className='object-cover h-60 w-60' />
      </div> */}
    </div>
  )
}

export default CloudPattern