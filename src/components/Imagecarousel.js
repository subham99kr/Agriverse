import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { db } from '../Firebase';
import { collection, getDocs } from "firebase/firestore"


const ImageCarousel = () => {
  const [product, setProduct] = useState([]);
  const userCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(userCollectionRef)
      console.log(data)
      setProduct(data.docs.map((doc) =>({ ...doc.data(), id: doc.id })))
      console.log(product)
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
      style={{backgroundColor: "#ffffee"}}
    >
      {product.map((items) => {
        return (
          <swiper-slide lazy="true">
            <div className="md:flex">
              <div className="md:basis-1/2 basis-1">
                <img src={items.imageUrl} alt={items.imageAlt} loading="lazy" />
              </div>
              <div className="md:basis-1/2 basis-1">
                <p className="text-center text-xl font-montserrat ">{items.description}</p>
              </div>
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};
export default ImageCarousel;
