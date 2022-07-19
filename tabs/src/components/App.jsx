import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import "./App.css";
import TabConfig from "./TabConfig";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthScreen from "./AuthScreen";
import * as microsoftTeams from "@microsoft/teams-js";
import AuthCallback from "./AuthCallback";


/**
 * The main app which handles the initialization and routing
 * of the app.
 */

 const CONFIG = {
  DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
  CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI,
  AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
};

microsoftTeams.initialize();
microsoftTeams.getContext((context) => {
  microsoftTeams.appInitialization.notifySuccess();
});

export default function App() {
  return (
      <Auth0Provider       
      domain={CONFIG.DOMAIN}
      clientId={CONFIG.CLIENT_ID}
      redirectUri={CONFIG.REDIRECT_URI}
      audience={CONFIG.AUDIENCE}>
        <Router>
          <Route exact path="/">
            <Redirect to="/tab" />
          </Route>
          <>
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsofuse" component={TermsOfUse} />
            <Route exact path="/auth" component={AuthScreen} />
            <Route path="/callback" component={AuthCallback} />
            <Route exact path="/tab" component={Tab} />
            <Route exact path="/config" component={TabConfig} />
          </>
        </Router>
      </Auth0Provider>
  );
}
