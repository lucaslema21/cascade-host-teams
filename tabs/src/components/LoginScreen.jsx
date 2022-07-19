import React from 'react';
import * as microsoftTeams from "@microsoft/teams-js";
import CascadeLogo from 'Remote/CascadeLogo'
import styles from './Styles.module.css'

const LoginScreen = ({onSuccess}) => {

  const loginOnClickHandler = () => { 
      microsoftTeams.authentication.authenticate({
        url: `${window.location.origin}/index.html#/auth`,
        width: 500,
        height: 778,
        successCallback: (result) => {
          onSuccess(result)
        },
        failureCallback: (e) => {
          console.log('failureCallback error!', e)
        }
      });
  };

  return (
      (
        <div>
          <div className={styles.main}>
            <div>
              <CascadeLogo size="large" />
            </div>
            <h2>Welcome to Cascade</h2>
            <p>Login to your existing Cascade account or create a new one!</p>
            <button className={styles.button} onClick={() => loginOnClickHandler()}>Access Cascade</button>
          </div>
        </div>
      )
  );
}

export default LoginScreen;