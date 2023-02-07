import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { request } from '../../api/request';
import LayoutMain from '../../containers/MainLayout'
import SimpleLoader from '../../components/loaders/SimpleLoader'
import LoadingModal from '../../components/modal/LoadingModal';

function RegisterVote() {
  const navigate = useNavigate()
  const req = request()
  const { enqueueSnackbar } = useSnackbar();
  const [vote, setVote] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [account, setAccount] = useState()
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!vote) {
      enqueueSnackbar("No has votado!", { variant: "error" });
      return
    }

    if (!name || !email || !phone || !account) {
      enqueueSnackbar("No se han llenado todos los datos.", { variant: "error" });
      return
    }

    setLoading(true)

    try {
      const {data:res} = await req({
        url: '/api/votes/new-vote',
        method: 'PUT',
        data: {
          vote,
          name,
          email,
          phone,
          account
        }
      })

      if (!res) {
        enqueueSnackbar("Error con el servidor, intete mas tarde.", { variant: "error" });
        setLoading(false)
        return
      }

      if (res.success) navigate('/voto-realizado')

    } catch (error) {
      console.log(error);
      setLoading(false)
      enqueueSnackbar("Error con el servidor, intete mas tarde.", { variant: "error" });
    }
  }

  return (
    <LayoutMain>
      <div className='px-4 py-5 bg-whiteLayout w-5/6 md:w-[30rem] rounded-lg flex flex-col items-center text-fonttext'>
        <div className='text-xl font-medium'>
          {vote && (
            <div>Votaste por {vote == 'boy' ? (
              <span className='text-boyColor2'>Niño</span>
            ) : (
              <span className='text-girlColor2'>Niña</span>
            )}</div>
          )}
          {!vote && (
            <div>Vota por tu predicción:</div>
          )}
        </div>
        <div className='mt-8 flex w-full justify-around'>
          <button onClick={() => setVote('boy')} className='button-boy'>Niño</button>
          <button onClick={() => setVote('girl')} className='button-girl'>Niña</button>
        </div>
        <div className='mt-10 text-xl font-medium'>Llena con tus datos:</div>
        <div className='mt-3 w-[85%] space-y-3'>
          <div className=''>
            <div className='text-lg text-fonttext'>Nombre:</div>
            <input onChange={e => setName(e.target.value)} className='h-8 w-full border-2 rounded'></input>
          </div>
          <div className=''>
            <div className='text-lg text-fonttext'>Correo:</div>
            <input onChange={e => setEmail(e.target.value)} className='h-8 w-full border-2 rounded'></input>
          </div>
          <div className=''>
            <div className='text-lg text-fonttext'>Número de celular:</div>
            <input onChange={e => setPhone(e.target.value)} className='h-8 w-full border-2 rounded'></input>
          </div>
          <div className=''>
            <div className='text-lg text-fonttext'>Tarjeta o cuenta bancaria <span className='text-sm'>...en caso de que ganes</span>:</div>
            <input onChange={e => setAccount(e.target.value)} className='h-8 w-full border-2 rounded'></input>
          </div>
        </div>
        <div className='mt-8'>
          <button onClick={submit} className='h-8 w-40 bg-fonttext text-whiteLayout justify-center items-center rounded'>Submit</button>
        </div>
      </div>
      <LoadingModal show={loading} />
    </LayoutMain>
  )
}

export default RegisterVote