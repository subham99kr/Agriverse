import logoBold from '../assets/logo-bold.png';
// import {Link} from 'react-router-dom'
import React from "react";
// import "./Login.css";

function Register() {
    return (
        <div className='bg-white pt-4 md:pt-6'>
            <div className='w-full max-w-sm bg-slate-600 m-auto flex items-center flex-col p-4 shadow-lg rounded'>
                <div className='w-20 overflow-hidden drop-shadow-md shadow-md'></div>
                <img src={logoBold} className="w-full" />

                <form>
                    <label className='text-white text-md font-medium' htmlFor="firstName">First Name</label>
                    <input
                        type={"text"}
                        id="firstName"
                        name="firstName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <label className='text-white text-md font-medium' htmlFor="lastName ">Last Name</label>
                    <input
                        type={"text"}
                        id="lastName"
                        name="lastName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <label className='text-white text-md font-medium' htmlFor="firstName">Address</label>
                    <textarea
                        name="Address"
                        placeholder="Enter Your Address"
                        rows={4}
                        cols={40}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
                    />
                    <label className='text-white text-md font-medium' htmlFor="firstName">Contact Number</label>
                    <input
                        type={"text"}
                        id="number"
                        name="number"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <label className='text-white text-md font-medium' htmlFor="lastName ">List of Crops to Sell</label>
                    <input
                        type={"text"}
                        id="crops"
                        name="crops"
                        placeholder="E.g. Sugarcane,Paddy And Corn"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <button className="w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4" >
                        Submit

                    </button>
 
                </form>
            </div>
        </div>
    )
}
export default Register