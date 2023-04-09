import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import '../styles/Imgaecarousel.css'
import { db } from '../Firebase';
import { collection, getDocs } from "firebase/firestore"


const ImageCarousel = () => {
  const [product, setProduct] = useState([]);
  const userCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(userCollectionRef)
      setProduct(data.docs.map((doc) =>({ ...doc.data(), id: doc.id })))
    }
    getProducts(); 
  }, []);


  return (
    <swiper-container
      grabCursor={true}
      centeredSlides={true}
      slides-per-view="auto"
      navigation="true"
      pagination={true}
    >
      {product.map((items) => {
        return (
          <swiper-slide lazy="true">
            <div className="md:flex shadow-md border-2 bg-slate-50 h-[90vh]">
              <div className="md:basis-1/2 basis-1">
                <div className='center'>
                <img src={items.imageUrl} alt={items.imageAlt} loading="lazy" />
                </div>
              </div>
              <div className="md:basis-1/2 basis-1 relative pt-6">
                <p className='text-center font-montserrat font-bold text-2xl mt-2 text-gray-700'>Description</p>
                <p className="text-xl font-montserrat items-center mt-6">{items.description}</p>
              </div>
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};
export default ImageCarousel;
