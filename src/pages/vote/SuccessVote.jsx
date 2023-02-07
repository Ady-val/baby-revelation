import React from 'react'
import LayoutMain from '../../containers/MainLayout'
import mes1 from '../../../public/img/1mes.jpg'
import { BiCopy } from "react-icons/bi";
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

function SuccessVote() {
  const { enqueueSnackbar } = useSnackbar();
  const account = '1234567890123'
  let contador = 0

  const handleOnClickCopy = () => {
    if (contador < 8) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("Cuenta copiada!", { variant: "info" });
    } else if (contador < 16) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("wey yaaaa!!!!", { variant: "warning" });
    } else if (contador < 32) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("YAAAAA!!!! >:v", { variant: "error" });
    } else if (contador < 64) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar(">:L", { variant: "danger" });
    } else if (contador < 500) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("Simon si se copió la cuenta >:L", { variant: "danger" });
    } else if (contador < 504) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("Felicidades!!! diste mas de 500 clicks...", { variant: "info" });
    } else if (contador < 508) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("Acabas de ganar un premio!!!", { variant: "info" });
    } else if (contador < 512) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("Toma foto a este mensaje y mandasela al papa", { variant: "info" });
    } else if (contador < 516) {
      navigator.clipboard.writeText(account);
      enqueueSnackbar("Se te paso el mensaje, verdad? jajaja meco", { variant: "info" });
    } else {
      contador = 0
    }
    contador++
  };

  return (
    <LayoutMain>
      <div className='text-3xl md:text-5xl text-center w-full font-medium text-whiteLayout'>¡Felicidades, se ha registrado tu voto!</div>
      <div className='mt-2 text-2xl md:text-4xl text-center w-full font-medium text-whiteLayout'>¡Muchas gracias por participar!</div>
      <div className='mt-2 text-lg md:text-2xl text-center w-full font-medium text-whiteLayout'>Atte: Cynthia y Adal</div>
      <div className='mt-6 px-6 py-6 bg-whiteLayout bg-opacity-80 w-5/6 md:w-[35rem] rounded-lg flex flex-col items-center text-slate-500'>
        <div>A continuación te dejamos los datos para realizar el depósito de la apuesta:</div>
        <div className='px-2 py-4 my-6 bg-gray-200 w-full md:w-4/6 rounded-lg'>
          <div>Banco: BBVA</div>
          <div className='flex items-center'>Cuenta: {account} &nbsp;<button onClick={handleOnClickCopy} className='text-xs flex items-center text-blue-500'>Copiar <BiCopy /></button></div>
          <div>Nombre: Adalberto Valles Bonilla</div>
        </div>
        <div>Es necesario que envíes el comprobante de depósito a uno de los papás para hacer válida tu participación.</div>
      </div>
      <Link to='/' className='mt-6 h-8 w-40 flex justify-center items-center bg-whiteLayout hover:text-boyColor2 rounded text-girlColor2'>Volver a inicio</Link>
    </LayoutMain>
  )
}

export default SuccessVote