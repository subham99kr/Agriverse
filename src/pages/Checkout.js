import React, { useContext, useEffect, useState } from "react";
import {
  MDBCard,
  MDBInput,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ShopContext } from "../context/ShopContext";
import {
  doc,
  getDoc,
  updateDoc,
  deleteField,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../Firebase";
import { getAuth } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

export default function Checkout() {
  const { cartItems, removeFromCart, clearCart } = useContext(ShopContext);
  const [productsInCart, setProductsInCart] = useState([]);

  const [address, setAddress] = useState("");
  const [cityState, setCityState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchCartProducts = async () => {
      const productEntries = Object.entries(cartItems);
      const fetchedProducts = await Promise.all(
        productEntries.map(async ([id, quantity]) => {
          const productRef = doc(db, "products", id);
          const productSnap = await getDoc(productRef);
          if (productSnap.exists()) {
            return { id, ...productSnap.data(), quantity };
          }
          return null;
        })
      );
      setProductsInCart(fetchedProducts.filter(Boolean));
    };

    fetchCartProducts();
  }, [cartItems]);

  const totalPrice = productsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please log in to complete your order.");
      return;
    }

    if (!address || !cityState || !pincode || !phone) {
      toast.warn("Please fill out all fields.");
      return;
    }

    const products = productsInCart.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
    }));

    try {
      await addDoc(collection(db, "orders"), {
        customerID: user.uid,
        address,
        cityState,
        pincode,
        phone,
        products,
        total: totalPrice,
        createdAt: serverTimestamp(),
      });

      const userCartRef = doc(db, "users", user.uid);
      await updateDoc(userCartRef, {
        cart: deleteField(),
      });
    
      clearCart();

      setAddress("");
      setCityState("");
      setPincode("");
      setPhone("");

      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong while placing the order.");
    }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <MDBTypography tag="h5" className="mb-1">
                          Shopping cart
                        </MDBTypography>
                        <p className="mb-0">
                          You have {productsInCart.length} item(s) in your cart
                        </p>
                      </div>
                    </div>

                    {productsInCart.map((product) => (
                      <MDBCard className="mb-3" key={product.id}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={product.imageUrl}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt={product.imageAlt || product.name}
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  {product.name}
                                </MDBTypography>
                                <p className="small mb-0">
                                  Quantity: {product.quantity}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                  {product.quantity}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  ₹{product.price}
                                </MDBTypography>
                              </div>
                              <a
                                href="#!"
                                onClick={() => removeFromCart(product.id)}
                                style={{ color: "#cecece" }}
                              >
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Details
                          </MDBTypography>
                        </div>

                        <form className="mt-4">
                          <MDBInput
                            className="mb-4"
                            label="Address"
                            type="text"
                            size="lg"
                            contrast
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                          <MDBInput
                            className="mb-4"
                            label="City, State"
                            type="text"
                            size="lg"
                            contrast
                            value={cityState}
                            onChange={(e) => setCityState(e.target.value)}
                          />
                          <MDBInput
                            className="mb-4"
                            label="Pincode"
                            type="text"
                            size="lg"
                            contrast
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                          />
                          <MDBInput
                            className="mb-4"
                            label="Phone Number"
                            type="text"
                            size="lg"
                            contrast
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">₹{totalPrice.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total (Incl. taxes)</p>
                          <p className="mb-2">₹{totalPrice.toFixed(2)}</p>
                        </div>

                        <MDBBtn color="info" block size="lg" onClick={handleCheckout}>
                          <div className="d-flex justify-content-between">
                            <span>₹{totalPrice.toFixed(2)}</span>
                            <span>
                              Checkout
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
