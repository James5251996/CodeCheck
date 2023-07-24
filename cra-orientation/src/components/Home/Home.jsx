import React, { useState, useHistory } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Home.css'
import UserResponse from '../UserAnswer/UserAnswer';
import Question from '../Question/Question';


function HomePage() {
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (<>
        <p>This is the Home page</p>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            spacing='2'
        >
            <ToggleButton value="web">React</ToggleButton>
            <ToggleButton value="android">C#</ToggleButton>
            <ToggleButton value="ios">JavaScript</ToggleButton>
        </ToggleButtonGroup>
        {/* this is where the question will be pulled from the server */}
        {/* will make it where the card shows the question and when you click on the card
        it will flip the card to show  result */}
        <Question/>
        <UserResponse/>
    </>)
}

export default HomePage;