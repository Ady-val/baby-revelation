import React from 'react'
import LayoutMain from '../../containers/MainLayout'
import mes1 from '../../../public/img/1mes.jpg'
import { blogPublications } from '../../data/blog'

function Blog() {
  return (
    <LayoutMain>
      <div className='text-3xl md:text-5xl text-center w-full font-medium text-whiteLayout'>Blog de fotos</div>
      <div className='mt-6 mb-16 w-4/6 max-w-3xl space-y-4'>
        {blogPublications.map(row => (
          <div className='w-full h-[25rem] bg-whiteLayout bg-opacity-90 rounded-lg grid grid-cols-2'>
            <div className='h-[25rem] flex justify-center items-center'>
              <img src={row.img} className='h-[100%] w-[100%] object-scale-down' />
            </div>
            <div className='h-full p-5 flex flex-col justify-center'>
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