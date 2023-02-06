import React, { useState } from 'react'
import Sessions from '../../../containers/Sessions'
import SessionInput from '../../../components/inputs/SessionInput';
import FormButton from '../../../components/buttons/FormButton';
import Load from '../../../components/loaders/Load'
import { request } from '../../../api/request'

function ChangePassRequest() {
  const [ success, setSuccess ] = useState(false)
  return (
    <Sessions>
      {success ? (
        <SuccessMessage />
      ) : (
        <Emailform setSuccess={setSuccess} />
      )}
    </Sessions>
  )
}

const Emailform = ({setSuccess}) => {
  const req = request()
  const [ email, setEmail ] = useState()
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
      sendEmail()
    }
  }

  const sendEmail = () => {
    setLoading(true)
    if(!email) {
      setAlertMessage("Inserte un correo.")
      setLoading(false)
      return
    }
    req.post('/api/auth/change-pass-request', { email }).then(res => {
      if (res.data) {
        console.log(res.data);
        setSuccess(res.data.success)
      } else if (res.request.status == 404) {
        setAlertMessage('Error: No se encontró ese correo en nuestro sistema.')
        setLoading(false)
      } else {
        setAlertMessage('Error en el sistema, intente mas tarde.')
        setLoading(false)
      }
    }).catch(err => {
      console.log(err);
      setAlertMessage('Error en el sistema, intente mas tarde.')
      setLoading(false)
    })
  }

  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='text-primary text-2xl mb-2'>Cambia tu contraseña</div>
      <div className='text-fonttext mb-5'>Introduce el correo de la cuenta con la que inicias sesión. Te enviaremos un mensaje que contiene un link en el cual podrás reestablecer tu contraseña.</div>
      <SessionInput
        onChange={e => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="example@mail.com"
      />
      <div className="mt-5 flex items-center">
        <FormButton
          text="Enviar"
          onClick={sendEmail}
          disabled={loading}
        />
        {loading && 
          <Load />
        }
      </div>
      {alertMessage && <div className='text-sm text-bold text-red-500 mt-1'>{alertMessage}</div>}
    </div>
  )
}

const SuccessMessage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='text-primary text-2xl mb-2'>Solicitud realizada con éxito!</div>
      <div className='text-fonttext mb-5'>Se ha enviado un link a tu correo para reestablecer tu contraseña.</div>
    </div>
  )
}

export default ChangePassRequest