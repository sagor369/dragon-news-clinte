import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect , useState } from 'react';
import app from '../../firebase/firebase.confige';

export const AuthContext = createContext()
const auth = getAuth(app)
const [user , setUser ] = useState(null)
const [isLoading, setLoading] = useState(false)
const display = 'sahed'
const loginHandle = (email, password)=>{
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
}
const registerHandle = (email, password)=>{
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
    setLoading(true)
    onAuthStateChanged(auth , users =>{
        setUser(users)
        setLoading(false)

    })
},[])
const authInfo = {
display,
loginHandle,
registerHandle,
isLoading,
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