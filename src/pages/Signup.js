import logoBold  from '../assets/logo-only.png';
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
      <div className='bg-[#f5f5f5] pt-4 md:pt-6 h-[90vh]'>
      <div className='bg-white w-full max-w-xl m-auto flex items-center flex-col p-4 rounded shadow-lg'>
              <div className='bg-slate-100 w-full overflow-hidden'></div>
              <img src={logoBold} className="p-3 h-32 rounded-3xl" />
          <form>
          <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="lastName ">Last Name</label>
            <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="email">Email</label>
            <input
            type={"email"}
            value={email} onChange={e => setEmail(e.target.value)} 
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"/>
            <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="password">Password</label>
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