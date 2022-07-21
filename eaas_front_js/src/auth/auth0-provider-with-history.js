import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = "dev---h9i6yv.eu.auth0.com";
    const clientId = "DgceCGpgfjgRQBmYudU2dOB5rB9MS74T";
    //const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            //audience={audience}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;