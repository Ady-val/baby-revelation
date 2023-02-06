import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import { request } from '../../../../api/request'
import { useAuth } from '../../../../auth/AuthFunctions'
import { checkFbLogin, FbLogin, FbLogout } from '../../../../services/fb'
import { FaFacebookF } from 'react-icons/fa'
import LoadingModal from '../../../../components/modal/LoadingModal';

function ConnectToFb() {
  const req = request();
  const auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [ loading, setLoading ] = useState(false);

  const getFbToken = async (e) => {
    e.preventDefault()
    const response = await FbLogin();
    if (response.status === 'connected') {
      setLoading(true)
      try {
        const {data: res} = await req({
          url: '/api/fb-token/save-token',
          method: 'POST',
          data: {
            authResponse: response.authResponse,
            userId: auth.data.id
          }
        })
        if (res.success) {
          window.location.reload(false);
        }
      } catch(err) {
        setLoading(false)
        console.log(err);
      }
    } else {
      enqueueSnackbar('Conexión a Facebook no exitosa', {variant: 'error', anchorOrigin: {vertical: 'bottom', horizontal: 'center',}});
    }
  }

  const logOutFb = async (e) => {
    e.preventDefault()
    await FbLogout()
  }

  const checkToken = async (e) => {
    e.preventDefault()
    await checkFbLogin()
  }
  return (
    <div className="w-full flex justify-center py-20">
      <div className="bg-menu w-[32rem] rounded-lg drop-shadow-2xl p-8">
        <div className="text-xl text-fonttext font-medium">Para utilizar este módulo, es necesario que conectes tu cuenta de facebook con Alex.</div>
        <div className="text-sm text-fonttext leading-loose my-3">Todos los permisos son necesarios para obtener la información sobre tus cuentas y campañas, no vamos a realizar cambios en tu perfil, páginas ni realizar publicaciones a tu nombre. </div>
        <dic className="text-sm text-fonttext leading-loose my-3">Para mas información visita nuestro apartado de  <a href='/politicas-de-privacidad' className="text-primary underline underline-offset-1">políticas de privacidad</a>.</dic>
        <div className="flex flex-col items-center">
          <button onClick={e => getFbToken(e)} className="button w-60 h-8 flex justify-center items-center" ><FaFacebookF className="mr-2 text-sm" /> Conectarse con facebook</button>
          {/* <FacebookLoginButton onClick={e => getFbToken(e)} /> */}
          {/* <button onClick={e => logOutFb(e)}>Logout</button>
          <button onClick={e => checkToken(e)}>CheckLogin</button> */}
        </div>
      </div>
      <LoadingModal show={loading} />
    </div>
  )
}

export default ConnectToFb