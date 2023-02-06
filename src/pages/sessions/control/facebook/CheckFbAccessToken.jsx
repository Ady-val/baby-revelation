import React, { Suspense, useEffect, useState } from 'react'
import { checkFbLogin } from '../../../../services/fb'
import FBLogin from './FBLogin'
import { useAuth } from '../../../../auth/AuthFunctions'
import { request } from '../../../../api/request'
import PageLoader from '../../../../components/loaders/PageLoader'
import ComingSoon from '../../../others/ComingSoon'

/**
 * It checks if the user has a valid Facebook access token, and if they do, it renders the children,
 * otherwise it renders the FBLogin component
 */
const CheckFbAccessToken = ({children}) => {
  const auth = useAuth();
  const req = request();

  const [ loading, setLoading ] = useState(true);
  const [ validToken, setValidToken ] = useState();

  useEffect(async () => {
    await req.get(`/api/fb-token/check-fb-login`).then(res => {
      if (res.status == 200) {
        setValidToken(true)
      } else {
        setValidToken(false)
      }
      setLoading(false)
    }).catch(err =>{
      console.log(err.response.data);
      setValidToken(false)
      setLoading(false)
    })
  }, [setLoading, setValidToken])

  if (loading) {
    return <PageLoader /> 
  } else if (validToken) {
    return children
  } else {
    return <FBLogin />
  }
}

export default CheckFbAccessToken