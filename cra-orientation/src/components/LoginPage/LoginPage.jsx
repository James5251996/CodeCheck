import React from "react";
// here i need to import the login form. 
import { useHistory } from 'react';

function LoginPage() {
    const history = useHistory();

    return (
        <div>
            {/* log in form.  */}

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
        </div>
    )
}

export default LoginPage;
