import React from "react"
import { AuthAPI } from "./auth";

const AuthContext = React.createContext();

/**
 * It's a function that takes in a children prop and returns a context provider with a value of an
 * object containing the user, signin, signup, and signout functions
 */
export const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(window.localStorage.getItem("user"));

  let signin = (data, callback) => {
    return AuthAPI.signin(data, (res) => {
      // console.log(res);
      const {email, status, code, token} = res
      console.log(name);
      if (status){
        setUser(email);
        window.localStorage.setItem("user", email)
        window.localStorage.setItem("token", token)
        callback({state: true});
      } else {
        callback({state: status, error: code})
      }
    });
  };

  let signup = (data, callback) => {
    return AuthAPI.signup(data, (res) => {
      const {email, status, code, token} = res
      if (status){
        setUser(email);
        window.localStorage.setItem("user", email);
        window.localStorage.setItem("token", token)
        callback({state: true});
      } else {
        callback({state: status, error: code});
      }
    });
  };

  let signout = (callback) => {
    return AuthAPI.signout(() => {
      setUser(null);
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token")
      callback();
    });
  };

  let value = { data: {user}, signin, signup, signout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * It returns the value of the AuthContext
 * @returns The AuthContext
 */
export function useAuth() {
  return React.useContext(AuthContext);
}