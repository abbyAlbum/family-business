const initState = {
    authError: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {

        case 'SIGNIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: action.err
            }

        case 'SIGNOUT_SUCCESS':
            console.log('logout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('sigup error');
            return {
                ...state,
                authError: action.err
            }

        default:
            return state;
    }
}