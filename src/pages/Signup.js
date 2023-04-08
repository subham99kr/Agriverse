import logoBold  from '../assets/logo-bold.png';
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup(){
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            alert('Successfully signed up')
            navigate('/')

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Email already in use')
            console.log(errorCode)
            console.log(errorMessage)
            navigate('/login')
            // ..
        });

}
    return(
        <div className='bg-white pt-4 md:pt-6'>
            <div className='w-full max-w-sm bg-slate-600 m-auto flex items-center flex-col p-4 shadow-lg rounded'>
                <div className='w-20 overflow-hidden drop-shadow-md shadow-md'></div>
          <img src={logoBold} className="w-full"/>

          <form>
          <label className='text-white text-md font-medium' htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <label className='text-white text-md font-medium' htmlFor="lastName ">Last Name</label>
            <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <label className='text-white text-md font-medium' htmlFor="email">Email</label>
            <input
            type={"email"}
            value={email} onChange={e => setEmail(e.target.value)} 
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <label className='text-white text-md font-medium' htmlFor="password">Password</label>
            <input
            type={"password"}
            value={password} onChange={e => setPassword(e.target.value)}
            id="password"
            name="password"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <button className="w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4" onClick={register}>
            Sign up
            
          </button>
          </form>
          <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to="/login" className="text-orange-500 underline">
            Login
          </Link>
        </p>
            </div>
        </div>
    )
}
export default Signup