import react from "react";
import logoBold from "../assets/logo-bold.png";
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
    <div className="bg-white pt-4 md:pt-6">
      <div className="w-full max-w-sm bg-slate-600 m-auto flex items-center flex-col p-4 shadow-lg rounded">
        <div className="w-20 overflow-hidden drop-shadow-md shadow-md"></div>
        <img src={logoBold} className="w-full" />

        <form>
          <label className="text-white text-md font-medium" htmlFor="email">
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
          <label className="text-white text-md font-medium" htmlFor="password">
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
