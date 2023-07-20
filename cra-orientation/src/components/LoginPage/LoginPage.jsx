import React from "react";
// here i need to import the login form. 
import { useHistory } from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm'

function LoginPage() {
    const history = useHistory();

    return (
        <div>
            <LoginForm/>

            <center>
                <button
                    type='button'
                    className="btn btn_asLink"
                    onClick={() => {
                        history.push('/registration')
                    }}>
                    Register
                </button>
            </center>
            <button onClick={() => {history.push('/home')}}>Home Page</button>
        </div>
    )
}

export default LoginPage;
