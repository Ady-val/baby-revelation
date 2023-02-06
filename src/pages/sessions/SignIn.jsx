import React, {useState} from 'react';
import Sessions from '../../containers/Sessions';
import SessionInput from '../../components/inputs/SessionInput';
import FormButton from '../../components/buttons/FormButton';
import TinyText from '../../components/text/TinyText';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthFunctions';
import Load from '../../components/loaders/Load';

function SignIn() {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState()
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

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

      if(!email || !pass) {
        setAlert(true)
        setAlertMessage("Inserte un usuario y contraseña.")
        return
      }
  
      handleSubmit()
    }
  }

/**
 * If the email or password is null, then set the alert to true and set the alert message to "Inserte
 * un usuario y contraseña."
 * 
 * If the email or password is not null, then call the handleSubmit function
 */
  const isNotNull = (event) => {
    event.preventDefault();

    if(!email || !pass) {
      setAlert(true)
      setAlertMessage("Inserte un usuario y contraseña.")
      return
    }

    handleSubmit()
  }

  const handleSubmit = () => {
    setLoading(true)

    auth.signin({
      email: email.replace(/ /g, ""),
      pass: pass
    }, (res) => {
      if (res.introduction == false) {
        navigate('/bienvenido')
      } else if (res.state){
        navigate(from, { replace: true });
      } else {
        setAlert(true)
        if (res.error === 401) {
          setAlertMessage("El correo o la contraseña son incorrectos.")
          console.log("correo");
        } 
        if (res.error === 409) {
          setAlertMessage("El correo o la contraseña son incorrectos.")
        } else {
          setAlertMessage("El correo o la contraseña son incorrectos.")
        }
        console.log("error:",res.error);
        setLoading(false)
      }
    });
  }
  return (
    <Sessions>
      <div className="flex flex-col">
        <div className="session-titles">Iniciar sesión</div>
        {/* <div className="session-titles-description">Inicia sesión con tu correo</div> */}
        <div className="session-titles-description text-sm">¿Aún no tienes tu cuenta? <Link className="underline underline-offset-1" to={"/sign-up"}> Crea una cuenta </Link></div>
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
        </div>
        <div className="mt-3 flex items-center">
          <FormButton
            text="Iniciar sesión"
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
          <TinyText>
            ¿Olvidaste tu contraseña? <Link className="underline underline-offset-1" to={"/solicitud-contrasena"}> Haz click aquí </Link>
          </TinyText>
          {/* <TinyText>
            ¿Aún no tienes tu cuenta? <Link className="underline underline-offset-1" to={"/sign-up"}> Crea una cuenta </Link>
          </TinyText> */}
        </div>
      </div>
    </Sessions>
  );
}

export default SignIn;
