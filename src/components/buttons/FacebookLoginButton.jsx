import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'

function FacebookLoginButton({onClick}) {
  return (
    <button onClick={onClick} className="w-60 py-2 bg-[#3b5998] text-white font-medium rounded flex items-center justify-center">
      <FaFacebookSquare className="text-2xl mr-3" /> Conectarse a Facebook
    </button>
  )
}

export default FacebookLoginButton