import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../Firebase";
import { v4 as uuidv4 } from "uuid";
import logoBold from "../assets/logo-only.png";

const Register = () => {
  const [userData, setUserData] = useState({
    productTitle: "",
    price: "",
    description: "",
    quantity: "",
    sku: "",
    unitSize: "",
  });

  const [file, setFile] = useState(null);

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const submitData = async (event) => {
    event.preventDefault();

    const { productTitle, price, description, sku, quantity, unitSize } = userData;

    if (!file || !productTitle || !price || !description || !sku || quantity <= 0 || !unitSize) {
      alert("All fields are required and quantity must be greater than 0");
      return;
    }

    try {
      if (!auth.currentUser) {
        throw new Error("User doesn't exist");
      }

      const userId = auth.currentUser.uid;
      const storageRef = ref(storage, `/image/${uuidv4()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Upload error:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          const docRef = await addDoc(collection(db, "products"), {
            name: productTitle,
            price: Number(price),
            description,
            imageUrl: downloadURL,
            sku,
            quantity: Number(quantity),
            unitSize,
            status: 'In stock',
            reviews: [],
            ownerId: userId,
            rating: null,
          });

          console.log("Product added with ID:", docRef.id);
          alert("Product Added Successfully");

          setUserData({
            productTitle: "",
            price: "",
            description: "",
            quantity: "",
            sku: "",
            unitSize: "",
          });
          setFile(null);
        }
      );
    } catch (error) {
      console.error("Error submitting data:", error.message);
      alert("Failed to add product. " + error.message);
    }
  };

  return (
    <div className="bg-[#f5f5f5] pt-4 md:pt-6 h-[90vh]">
      <div className="bg-white w-full max-w-xl m-auto flex items-center flex-col p-4 rounded shadow-lg">
        <img src={logoBold} alt="Logo" className="p-3 h-32 rounded-3xl" />
        <form onSubmit={submitData} className="w-full">
          <label className="mt-6 text-lg font-medium">Product Title</label>
          <input
            type="text"
            name="productTitle"
            value={userData.productTitle}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded"
          />

          <label className="mt-6 text-lg font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={userData.price}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded"
          />

          <label className="mt-6 text-lg font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={userData.quantity}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded"
          />

          <label className="mt-6 text-lg font-medium">Unit Size</label>
          <input
            type="text"
            name="unitSize"
            value={userData.unitSize}
            onChange={postUserData}
            placeholder="e.g. 1kg, 500ml"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded"
          />

          <label className="mt-6 text-lg font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={userData.sku}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded"
          />

          <label className="mt-6 text-lg font-medium">Description</label>
          <textarea
            name="description"
            rows={4}
            value={userData.description}
            onChange={postUserData}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded"
          />

          <label className="mt-6 text-lg font-medium">Upload Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 mb-4"
          />

          <button
            type="submit"
            className="w-full max-w-[150px] bg-orange-500 hover:bg-orange-600 text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
