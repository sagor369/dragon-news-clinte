import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.confige';

export const AuthContext = createContext()
const auth = getAuth(app)
const [user , setUser ]= useState()
const [isLoading, setLoading] = useState(false)
const display = 'sahed'
const loginHandle = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const registerHandle = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
    onAuthStateChanged(auth , users =>{
        setUser(users)

    })
},[])
const authInfo = {
display,
loginHandle,
registerHandle,
user

}

const PriveteRoute = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PriveteRoute;