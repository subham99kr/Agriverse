import react from "react";
import logoBold from "../assets/logo-only.png";
import React, { useState } from "react";
// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(email)
        const user = userCredential.user;
        alert("Successfully logged in.");
        // toast("Successfully logged in.");
        // <ToastContainer />
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("Invalid credential.");
        const errorMessage = error.message;
      });
  };

  return (
    <div className='bg-[#f5f5f5] pt-4 md:pt-6 h-[90vh]'>
      <div className='bg-white w-full max-w-xl m-auto flex items-center flex-col p-4 rounded shadow-lg'>
              <div className='bg-slate-100 w-full overflow-hidden'></div>
              <img src={logoBold} className="p-3 h-32 rounded-3xl" />
        <form>
          <label className="mt-6 text-lg font-montserrat font-medium" htmlFor="email">
            Email
          </label>
          <input
            type={"email"}
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <label className="mt-6 text-lg font-montserrat font-medium" htmlFor="password">
            Password
          </label>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <button
            className="w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4"
            onClick={signIn}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
