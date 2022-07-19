import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'

const AuthScreen = () => {

  const {loginWithRedirect} = useAuth0();


  useEffect(()  => {
      loginWithRedirect();
  }, [])
  return null;
}

export default AuthScreen;
