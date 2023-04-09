import { async } from "q";
import logoBold from "../assets/logo-only.png";
import { useState } from "react";
// import {Link} from 'react-router-dom'
import React from "react";
// import "./Login.css";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    number: "",
    crops: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, address, number, crops } = userData;
    if (firstName && lastName && address && number && crops) {
      const res = fetch(
        "https://webgriphunters-117f8-default-rtdb.firebaseio.com/regUsers.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            address,
            number,
            crops,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          address: "",
          number: "",
          crops: "",
        });
        alert("Thanks for registering as a seller");
      } else {
        alert("Please fill every data");
      }
    }
  };

  return (
    <div className="bg-[#f5f5f5] pt-4 md:pt-6 h-[90vh]">
      <div className="bg-white w-full max-w-xl m-auto flex items-center flex-col p-4 rounded shadow-lg">
        <div className="bg-slate-100 w-full overflow-hidden"></div>
        <img src={logoBold} className="p-3 h-32 rounded-3xl" />
        <form>
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="lastName "
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="firstName"
          >
            Address
          </label>
          <textarea
            name="address"
            value={userData.address}
            placeholder="Enter Your Address"
            rows={4}
            cols={40}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
            onChange={postUserData}
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="firstName"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={userData.number}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="lastName "
          >
            List of Crops to Sell
          </label>
          <input
            type="text"
            id="crops"
            name="crops"
            value={userData.crops}
            onChange={postUserData}
            placeholder="E.g. Sugarcane,Paddy And Corn"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <button
            className="w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-600 cursor-pointer  text-xl font-medium text-center py-1 rounded-full mt-4"
            onClick={submitData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
