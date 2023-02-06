import React from "react";
import img404 from '../../../../public/img/404.svg'
import { Link } from 'react-router-dom'
import { useLocation, Navigate } from "react-router";
import { useAuth } from "../../../auth/AuthFunctions";
import { FiAlertTriangle } from "react-icons/fi"

const showForDemo = () => {
  return (
    <div className="bg-bgsecondary shadow-innermain h-screen flex justify-center pt-12">
      <div className="w-1/2 h-2/3 shadow-xl bg-menu rounded-lg p-8 flex flex-col">
        <div className="flex justify-center mb-4">
          <FiAlertTriangle className="text-6xl text-primary" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl text-center font-bold mb-2">Parece que no tienes acceso :(</div>
          <div className="text-center text-fonttext text-lg">Para tener acceso total al contenido de <span className="text-primary">Alex</span> puedes adquirir tu licencia el botón de abajo.</div>
        </div>
        <div className="grow flex justify-center items-center">
          <a href="https://pymesinteligentes.com/#comprar" target="_blank" className="w-1/2 h-1/2 rounded-lg shadow-innerB bg-primary hover:bg-primaryhover flex justify-center items-center">
            <div className="text-menu">
              Consigue Alex ahora!
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

function IsDemo({ children }) {
  let auth = useAuth();
  let location = useLocation;

  if (auth.data.rol == 'demo') {
    console.log('es demo');
    console.log(auth.data);
    return showForDemo()
  }

  return children;
}

export default IsDemo