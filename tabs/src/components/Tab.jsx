import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginScreen from "./LoginScreen";
import SelectWorkspaceScreen from "./SelectWorkspaceScreen";
import LoadingSpinner from "Remote/LoadingSpinner"
import styles from './Styles.module.css'
import App from 'Remote/App';


export default function Tab() {

  const {isAuthenticated, isLoading, user} = useAuth0()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState()

  useEffect(() => {
    setUserData(user)
  }, [user])

  const handleLoginSuccess = e => {
    const data = JSON.parse(e)
    setIsLoggedIn(data.isAuthenticated)
    setUserData(data.user)
  }
  
  if(isLoading) {
    return (
      <div className={styles.main}>
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div>
        {isLoggedIn || isAuthenticated ? 
          <>
          {userData && userData.org_id ? <App/> : 
          <SelectWorkspaceScreen userData={userData} />}
          </>
          :
          <LoginScreen onSuccess={(e) => {
            handleLoginSuccess(e)
          }} />}
    </div>
  );
}