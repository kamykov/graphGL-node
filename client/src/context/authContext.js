import React, { useReducer, createContext } from 'react';

// reducer
const firebaseReducer = (state, action) => {
    switch (action.type) {
        case "LOGGED_IN_USER":
            return { ...state, user: action.payload }
            break;

        default:
            return state
            break;
    }
}

// state
const initialState = {
    user: null
}


//create context

const AuthContext = createContext()

// context Provider

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const value = { state, dispatch };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}


export { AuthContext, AuthProvider }