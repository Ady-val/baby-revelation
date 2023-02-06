import React, { useState } from 'react'
import Sessions from '../../../containers/Sessions'
import SessionInput from '../../../components/inputs/SessionInput';
import FormButton from '../../../components/buttons/FormButton';
import Load from '../../../components/loaders/Load'
import SimpleLoader from '../../../components/loaders/SimpleLoader'
import { request } from '../../../api/request'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ChangePass() {
  const req = request()
  const { id } = useParams()
  const [ idIsValid, setIdIsValid ] = useState(false)
  const [ success, setSuccess ] = useState(false)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    req.get('/api/auth/verify-pass-request',{params:{id}}).then(res => {
      if (res.data) {
        setIdIsValid(true)
      } else {
        setIdIsValid(false)
      }
      setLoading(false)
    }).catch(err => {
      console.log(err);
      setIdIsValid(false)
    })
  }, [setLoading, setIdIsValid])
  return (
    <div className='w-full flex justify-center items-center'>
      {loading ? (
        <div className='w-full h-full flex justify-center items-center'><SimpleLoader /></div>
      ) : (
        idIsValid ? (
          <Sessions>
            {success ? (
              <SuccessMessage />
            ) : (
              <PassForm setSuccess={setSuccess} passRequestId={id} />
            )}
          </Sessions>
        ) : (
          <ErroMessage />
        )
      )}
    </div>
  )
}

const PassForm = ({setSuccess, passRequestId}) => {
  const req = request()
  const [ newPass, setPass ] = useState()
  const [ confirmPass, setConfirmPass ] = useState()
  const [ loading, setLoading ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState()
  /**
   * If the user presses the enter key, and the email and password fields are empty, then set the alert
   * to true and set the alert message to "Inserte un usuario y contraseña.". 
   * If the user presses the enter key, and the email and password fields are not empty
   * @returns The function handleSubmit is being returned.
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendNewPass()
    }
  }

  const sendNewPass = async () => {
    setLoading(true)
    if (!newPass || !confirmPass) {
      setLoading(false)
      setAlertMessage('Llena los campos correspondientes.')
      return
    }

    if(newPass !== confirmPass){
      setLoading(false)
      setAlertMessage('Las contraseñas no coinciden.')
      return
    }

    try {
      const {data: res} = await req({
        url: '/api/auth/change-pass-request',
        method: 'PUT',
        data: {
          newPass,
          passRequestId
        }
      })

      if (res.success) {
        setLoading(false)
        setSuccess(true)
      }
    } catch(e) {
      console.log(e);
      setLoading(false)
      setAlertMessage('Error en el sistema, intente mas tarde.')
    }
  }

  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='text-primary text-2xl mb-2'>Cambia tu contraseña</div>
      <div className='text-fonttext mb-2'>Introduce la nueva contraseña.</div>
      <SessionInput
        onChange={e => setPass(e.target.value)}
        type={"password"}
      />
      <div className='text-fonttext mb-2 mt-4'>Introduce nuevamente la contraseña.</div>
      <SessionInput
        onChange={e => setConfirmPass(e.target.value)}
        onKeyDown={handleKeyDown}
        type={"password"}
      />
      <div className="mt-5 flex items-center">
        <FormButton
          text="Enviar"
          onClick={sendNewPass}
          disabled={loading}
        />
        {loading && 
          <Load />
        }
      </div>
      <div className='text-sm text-bold text-red-500 mt-2 h-6'>{alertMessage ?? ''}</div>
    </div>
  )
}

const SuccessMessage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='text-primary text-2xl mb-2'>Solicitud realizada con éxito!</div>
      <div className='text-fonttext mb-5'>Tu contraseña se ha cambiado correctamente, ya puedes ir a la pantalla de inicia sesión.</div>
      <div className="flex h-8 w-40">
        <Link to="/sign-in" className="adjustable-button flex justify-center items-center">Iniciar sesión</Link>
      </div>
    </div>
  )
}

const ErroMessage = () => {
  return (
    <div className="w-full h-4/5 m-8 md:m-0 md:w-2/3 md:h-2/3 bg-menu rounded-lg flex flex-col justify-center p-8 shadow-popup">
      <div className="flex flex-col justify-center items-center">
        <div className="text-fonttext font-semibold text-4xl mb-8">Error al encontrar la página :(</div>
        <div className="text-fonttext font-medium text-lg mb-1">El enlace al cual intentas acceder ya no se encuetra diponible.</div>
      </div>
    </div>
  )
}

export default ChangePass