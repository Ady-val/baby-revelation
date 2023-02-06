import React from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../auth/AuthFunctions";

/**
 * If the user is not logged in, redirect them to the login page
 * @returns The children of the component.
 */
function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation;

  if (!auth.data.rol) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    //return <Navigate to="/login" state={{ from: location }} replace />;
    // console.log(auth.data);
    return <Navigate to="/sign-in"  />;
  }
  // if (auth.data.rol == "user") {
  //   // console.log(auth.data);
  //   return <Navigate to="/no-license"  />;
  // }

  return children;
}

export default RequireAuth