import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { BsCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import "../styles/fonts.css";
import brandLogo from "../assets/logo-bold.png";
import { ShopContext } from "../context/ShopContext";
import { auth } from "../Firebase";
import { signOut, onAuthStateChanged  } from "firebase/auth";

function Header() {
  const [showMenu, setShowMenu] = useState(false); 
  const handleShowMenu = () => {
    setShowMenu(prev => !prev); 
  }
  const { cartItems } = useContext(ShopContext); 
  let cartNumber = 0; 
  const keys = Object.keys(cartItems); 
  console.log(cartItems)
  keys.forEach(element => {
    cartNumber += cartItems[element]; 
    console.log(cartItems[element])
    
  });
  const[authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        // User is signed out
        // ...
        setAuthenticated(false);
      }
    });
  }, [])

  return (
    <>
      <header className="shadow-md w-full h-24 bg-blue-950 ">
        <img
          className="absolute m-0 h-32 w-full -z-10"
          src=""
          alt="background"
        />
        <div className="flex items-center h-full justify-between">
          <Link to="/">
            <img src={brandLogo} alt="agriverse" className="ml-2 h-16" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-7 p-6">
            <nav className="flex gap-2 md:gap-6 text-xl">
              <Link
                className="text-white font-montserrat font-medium hover:text-green-200 "
                to="/search"
              >
                Explore
              </Link>

              <Link
                className="text-white font-montserrat font-medium hover:text-green-200"
                to="/news"
              >
                News
              </Link>
              <Link
                className="text-white font-montserrat font-medium hover:text-green-200"
                to="/help"
              >
                Help
              </Link>
              <Link
                className="text-white font-montserrat font-medium hover:text-green-200"
                to="/team"
              >
                Team
              </Link>
              <a
                href="http://127.0.0.1:5000/crop-recommend" className="text-white font-montserrat font-medium hover:text-green-200"
              >
                Crop Finder
              </a>
              <a
                href="http://127.0.0.1:5000/fertilizer" className="text-white font-montserrat font-medium hover:text-green-200"
              >
                Fertilizer Finder
              </a>
            </nav>
            <div className="text-2xl text-white  hover:text-green-400 relative">
              < Link to="/cart"><BsCartFill /></Link>
              <div className="absolute bottom-2 left-3 hover:bg-red-800 bg-red-500 text-sm rounded-xl text-white h-5 w-5 text-center">
                {cartNumber}
              </div>
            </div>
            <div>
              <div className="text-2xl text-white  hover:text-green-400" onClick={handleShowMenu}>
                <FaUserAlt />
              </div>
              {showMenu && (<div className="absolute right-0 bg-white shadow px-2 py-2 my-1 drop-shadow-md z-20">
                {authenticated ?
                  <>
                  <Link to='/register'>
                  <p className="whitespace-nowrap">New Product</p>
                  </Link>
                  <p className="whitespace-nowrap" onClick={async()=>{await signOut(auth)}}>Sign Out</p>
                  </>
                :
                <>
                  <Link to="/signup" onClick={handleShowMenu}>
                  <p className="whitespace-nowrap">Signup</p>
                </Link>
                <Link to="/login" onClick={handleShowMenu}>
                  <p className="whitespace-nowrap">login</p>
                </Link>
                </>
                }
                
                
              </div>)}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
