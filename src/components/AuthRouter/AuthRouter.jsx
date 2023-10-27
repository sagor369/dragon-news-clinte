import React, { useContext } from 'react';
import { AuthContext } from '../PrivetRoute/PriveteRoute';
import { Navigate } from 'react-router-dom';
const {isLoading, user} = useContext(AuthContext)



const AuthRouter = ({children}) => {
    if(isLoading){
        return <div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>
    }
    
    if(!user){
        return <Navigate to="/login " replace={true} />
    }
    else{

        return {children}
    }
};

export default AuthRouter;