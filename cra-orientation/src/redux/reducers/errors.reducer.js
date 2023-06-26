import  {combineReducers} from 'redux';

const loginmessage = (state = '', action) => {
    switch (action.type) {
        case 'CLEAR_LOGIN_ERROR':
            return '';
        case 'LOGIN_INPUT_ERROR':
            return 'Enter your username and password!'
        case 'LOGIN_FAILED':
            return 'Oops! The username and password did not match, try again!';
        case 'LOGIN_FAILED_NO_CODE':
            return 'Oops!, Somtheing went wrong. Is the server running?';
        default:
            return state;
    }
};

const registrationMessage = (state = '', action) => {
    switch(action.type) {
        case 'CLEAR_REGISTRATION_ERROR':
            return '';
        case 'REGISTRATION_INPUT_ERROR':
            return 'Choose a username and password!';
        case 'REGISTRATION_FAILED':
            return 'Oops! That did not work. The username might already be taken. try again.';
        default: 
            return state;
    }
}

export default combineReducers({
    loginmessage,
    registrationMessage,
});