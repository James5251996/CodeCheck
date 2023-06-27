import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// here is wehere I will import the Style CSS file.

// here i have to import the registration form. 

function LandingPage() {
    const [heading, setHeading] = useState('Welcome')
    const history = useHistory();

    const onLogin = (event) => {
        history.push('/login');
    };

    return (<> 
        <h2>Welcome to CodeCheckerts!!</h2>
        // here is where the registration form will go.

        <center>
        <h4>Already a member?</h4>
        <button onClick={onLogin}>Login</button>    
        </center> 
   </> )
}

export default LandingPage
