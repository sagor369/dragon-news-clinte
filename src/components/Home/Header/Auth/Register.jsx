import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../PrivetRoute/PriveteRoute';

const Register = () => {
    const {registerHandle} = useContext(AuthContext)
    const handleRegister = event =>{
        event.preventDefault()
        const from = event.target 
        const name = from.name.value
        const email = from.email.value 
        const password = from.password.value 

        console.log(email, password, )
        registerHandle(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            const errorCode = error.code 
            const errorMessage = error.message 
            console.log(errorCode, errorMessage)
        })
    }
    return (
        <div className="w-1/2 mx-auto border p-4 rounded mt-20">
        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-6 mb-4">
            <label className="col-span-1">Name : </label>
            <input
              className="bg-gray-100 col-span-5 px-4 py-2"
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
            />
          </div>
          <div className="grid grid-cols-6 mb-4">
            <label className="col-span-1">Email : </label>
            <input
              className="bg-gray-100 col-span-5 px-4 py-2"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
            />
          </div>
  
          <div className="grid grid-cols-6 mb-4">
            <label className="col-span-1">Password : </label>
            <input
              className="bg-gray-100 col-span-5 px-4 py-2"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between">
            <p>
              <span>alrady have a account </span> 
              <Link className="text-blue-600 " to="/login">
                 login
              </Link>
            </p>
            <Link className="text-blue-600" to="">Forget password</Link>
          </div>
          <input className="btn mt-6 " type="submit" value="Register" />
        </form>
      </div>
    );
};

export default Register;