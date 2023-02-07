import React from 'react'
import LayoutMain from '../../containers/MainLayout'
import mes1 from '../../../public/img/1mes.jpg'
import { blogPublications } from '../../data/blog'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <LayoutMain>
      <Link to='/' className='mb-3 h-8 w-40 flex justify-center items-center bg-whiteLayout hover:text-boyColor2 rounded text-girlColor2'>Volver a inicio</Link>
      <div className='text-3xl md:text-5xl text-center w-full font-medium text-whiteLayout'>Blog de fotos</div>
      <div className='mt-6 mb-16 w-full px-3 md:w-4/6 max-w-3xl space-y-4'>
        {blogPublications.map((row, i) => (
          <div key={i} className='w-full h-[30rem] md:h-[25rem] bg-whiteLayout bg-opacity-90 rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
            <div className='h-[18rem] md:h-[25rem] flex justify-center items-center'>
              <img src={row.img} className='h-[100%] w-[100%] object-cover md:object-scale-down' />
            </div>
            <div className='p-5 flex flex-col justify-center'>
              <div className='blog-title'>{row.title}</div>
              <div className='blog-subtitle'>{row.subtitle}</div>
              <div className='blog-description'>{row.description}</div>
            </div>
          </div>
        ))}
      </div>
    </LayoutMain>
  )
}

export default Blog