import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { BrowserRouter, Link} from 'react-router-dom';



const clientId = "367910294455-jj48mc003lhj2ou0osab6772g56m66ej.apps.googleusercontent.com";

function Login() {


    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <BrowserRouter>
        <div className="grid-container">
        <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <Link to="/">ECommerce</Link>
      </div>
    </header>

        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>

        </div>
        </BrowserRouter>
    );
}
export default Login;