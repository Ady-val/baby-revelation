import React, {useState} from 'react';
import Sessions from '../../containers/Sessions';
import SessionInput from '../../components/inputs/SessionInput';
import FormButton from '../../components/buttons/FormButton';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../auth/AuthFunctions';
import Load from '../../components/loaders/Load';

function SignUp() {
  let navigate = useNavigate();
  let auth = useAuth();
  const { userType } = useParams()

  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [confirmPass, setConfirmPass] = useState()
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState()
  const [loading, setLoading] = useState(false)

  //este código será utilizado para que se devuelva a la pantalla que deseaba acceder
  //let from = location.state.from.pathname || "/";
  let from = "/panel"

/**
 * If the user presses the enter key, and the email and password fields are empty, then set the alert
 * to true and set the alert message to "Inserte un usuario y contraseña.". 
 * If the user presses the enter key, and the email and password fields are not empty
 * @returns The function handleSubmit is being returned.
 */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      if(!email || !pass || !confirmPass) {
        setAlert(true)
        setAlertMessage("Inserte un usuario y contraseña.")
        return
      }
  
      if(pass != confirmPass) {
        setAlert(true)
        setAlertMessage("Las contraseñas no son correctas.")
        return
      }

      handleSubmit()
    }
  }

/**
 * If the email, password, or confirm password fields are empty, then display an alert message. If the
 * password and confirm password fields do not match, then display an alert message. Otherwise, call
 * the handleSubmit function
 * @returns The function isNotNull is being returned.
 */
  const isNotNull = (event) => {
    event.preventDefault();

    if(!email || !pass || !confirmPass) {
      setAlert(true)
      setAlertMessage("Inserte un usuario y contraseña.")
      return
    }

    if(pass != confirmPass) {
      setAlert(true)
      setAlertMessage("Las contraseñas no son correctas.")
      return
    }

    handleSubmit()
  }

  const handleSubmit = () => {
    setLoading(true)
    
    auth.signup({
      email: email.replace(/ /g, ""),
      pass: pass,
      confirmPass: confirmPass,
      userType: userType ?? 'user'
    }, (res) => {
      if (res.introduction == false) {
        navigate('/bienvenido')
      } else if (res.state){
        navigate(from, { replace: true });
      } else {
        setAlert(true)
        if (res.error === 409) {
          setAlertMessage("Ya existe un usuario con ese correo.")
        } else {
          setAlertMessage("Error al iniciar sesión.")
        }
        console.log("error:",res.error);
        setLoading(false)
      }
    });
  }
  return (
    <Sessions>
      <div className="flex flex-col ">
        <div className="session-titles">¡Crea tu cuenta!</div>
        <div className="session-titles-description text-sm">¿Ya tienes una cuenta? <Link className="underline underline-offset-1" to={"/sign-in"}> Inicia sesión aquí </Link></div>
        <div className="w-52">
          <SessionInput 
            title="Correo:"
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="example@mail.com"
          />
          <SessionInput 
            title="Contraseña:"
            onChange={e => setPass(e.target.value)}
            onKeyDown={handleKeyDown}
            type={"password"}
          />
          <SessionInput 
            title="Confirmar contraseña:"
            onChange={e => setConfirmPass(e.target.value)}
            onKeyDown={handleKeyDown}
            type={"password"}
          />
        </div>
        <div className="mt-3 flex items-center">
          <FormButton
            text="Crear cuenta"
            onClick={isNotNull}
            disabled={loading}
          />
          {loading && 
            <Load />
          }
        </div>
        <div className="mt-3">
          {alert && (
            <div className="text-sm text-bold text-red-500">{alertMessage}</div>
          )}
          {/* <TinyText>
            Already have an account? <Link className="underline underline-offset-1" to={"/sign-in"}> Login </Link>
          </TinyText> */}
        </div>
      </div>
    </Sessions>
  );
}

export default SignUp;
