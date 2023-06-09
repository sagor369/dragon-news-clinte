import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.confige';

export const AuthContext = createContext()
const auth = getAuth(app)
const display = 'sahed'
const loginHandle = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const registerHandle = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const authInfo = {
display,
loginHandle,
registerHandle,

}

const PriveteRoute = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PriveteRoute;