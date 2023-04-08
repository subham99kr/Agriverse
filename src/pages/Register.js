import logoBold from '../assets/logo-only.png';
// import {Link} from 'react-router-dom'
import React from "react";
// import "./Login.css";

function Register() {
    return (
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
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="lastName ">Last Name</label>
                    <input
                        type={"text"}
                        id="lastName"
                        name="lastName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="firstName">Address</label>
                    <textarea
                        name="Address"
                        placeholder="Enter Your Address"
                        rows={4}
                        cols={40}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
                    />
                    <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="firstName">Contact Number</label>
                    <input
                        type={"text"}
                        id="number"
                        name="number"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <label className='mt-6 text-lg font-montserrat font-medium' htmlFor="lastName ">List of Crops to Sell</label>
                    <input
                        type={"text"}
                        id="crops"
                        name="crops"
                        placeholder="E.g. Sugarcane,Paddy And Corn"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue" />
                    <button className="w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-600 cursor-pointer  text-xl font-medium text-center py-1 rounded-full mt-4" >
                        Submit

                    </button>
                </form>
            </div>
        </div>
    )
}
export default Register