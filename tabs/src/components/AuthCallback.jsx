import React, { useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { useAuth0 } from "@auth0/auth0-react";
import {useHistory} from 'react-router-dom'

const AuthCallback = () => {
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();
  let history = useHistory()
  
  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then(token => {
        if (window.opener) {
          microsoftTeams.authentication.notifySuccess(
            JSON.stringify({ isAuthenticated, token: token.__raw, user: user })
          );
        } else {
          
          history.push('/tab')
        }
      })
    }
  }, [isAuthenticated]);

  // window.close();
  return null;
};

export default AuthCallback;