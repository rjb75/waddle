import React from "react";
import './Authentication.scss';
import SplashLogo from "../../images/splash-logo.svg";


const Splash = () => {

    const goToLogin = () => {
        // handle route to login
    }

    const goToRegister = () => {
        // handle route to login
    }

    return (
        <div className="splash-container auth-main flex-c">
            <div className="header-container flex-c">
                <img className="splash-logo" src={SplashLogo} />
                <p className="text--white welcome-title">Welcome to Wadle</p>
                <p className="text--white welcome-message">Your friendly neighbourhood penguin pals</p>
            </div>
            <div className="field-container flex-c">
                <p className="btn btn-primary--blue-dark register-button" onClick={goToRegister}>Register</p>
                <p className="text--white">Already have an account? <a className="text-link" onClick={goToLogin}>Log in</a></p>
            </div>
        </div>
    ); 
};

export default Splash;