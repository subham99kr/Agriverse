import logoBold from "../assets/logo-only.png";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../Firebase";
import {v4 as uuidv4} from "uuid";
// import {Link} from 'react-router-dom'
import React from "react";
// import "./Login.css";

const Register = () => {
  const [userData, setUserData] = useState({
    productTitle: "",
    price: "",
    description: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const [file, setFile] = useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  

  const submitData = async (event) => {
    event.preventDefault();
    let storageRef = ref(storage, `/image/${uuidv4()}`);
    const { productTitle, price, description } = userData;
    if (file && productTitle && price && description) {
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // update progress
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
            // imgURL = url;
            try {
              const docRef = await addDoc(collection(db, "products"), {
                imageAlt: productTitle,
                price: price,
                description: description,
                imageUrl: url
              });
              console.log("Document written with ID: ", docRef.id);
              alert("Product Added Sucessfully");
        
              setUserData({
                productTitle: "",
                price: "",
                description: "",
              });
            
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          });
        }
      );

    }
    else alert("All fields are required");
  };

  return (
    <div className="bg-[#f5f5f5] pt-4 md:pt-6 h-[90vh]">
      <div className="bg-white w-full max-w-xl m-auto flex items-center flex-col p-4 rounded shadow-lg">
        <div className="bg-slate-100 w-full overflow-hidden"></div>
        <img src={logoBold} className="p-3 h-32 rounded-3xl" />
        <form>
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="productTitle"
          >
            Product Title
          </label>
          <input
            type="text"
            id="productTitle"
            name="productTitle"
            value={userData.productTitle}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="price "
          >
            Product Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={userData.price}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium"
            htmlFor="productTitle"
          >
            Description
          </label>
          <textarea
            name="description"
            value={userData.description}
            placeholder="Enter Your description"
            rows={4}
            cols={40}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue"
            onChange={postUserData}
          />
          <label
            className="mt-6 text-lg font-montserrat font-medium">
              Company Logo</label>
              <br/>
              <input
                // className={styles.Input}
                type="file"
                id="logo"
                name="logo"
                onChange={handleChange}
                accept="/image/*"
              />
              <br/>
        
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
