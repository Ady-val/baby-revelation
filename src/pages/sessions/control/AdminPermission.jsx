import React from 'react'
import { useAuth } from '../../../auth/AuthFunctions'
import NotFound from '../../others/NotFound'

function AdminPermission({children}) {
  const { data } = useAuth()

  if (data.rol == 'admin') {
    return children
  } else {
    return <NotFound />
  }
}

export default AdminPermission