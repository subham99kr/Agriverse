import '../styles/fonts.css'
const ImageCarousel = () => {
  let products = [
    {
      id: 1,
      name: "Nagpuri Oranges",
      href: "#",
      imageSrc: "https://images.slurrp.com/prod/articles/pue8orx8te.webp",
      imageAlt: "Best Oranges in India",
      price: "INR 120/KG ",
    },
    {
      id: 2,
      name: "Kashmiri Apples",
      href: "#",
      imageSrc:
        "https://images.news18.com/ibnlive/uploads/2021/11/apple-1-16361875623x2.jpg?impolicy=website&width=510&height=356",
      imageAlt: "Best Apples in India",
      price: "INR 80/KG",
    },
  ];
  for (let i = 0; i < 2; i++) {
    products.push(...products);
  }
  const styles = {
    backgroundColor: "#ffffef",
  };
  return (
    <swiper-container
      grabCursor={true}
      centeredSlides={true}
      slides-per-view="auto"
      navigation="true"
      pagination={true}
      style={styles}
    >
      {products.map((items) => {
        return (
          <swiper-slide lazy="true">
            <div className="md:flex">
              <div className="md:basis-1/2 basis-1">
                <img src="https://picsum.photos/700/500" alt={items.imageAlt} loading="lazy" />
              </div>
              <div className="md:basis-1/2 basis-1">
                <p className="text-center text-xl font-montserrat ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sit amet quam leo. Curabitur imperdiet ligula vel convallis
                  auctor. Fusce interdum, tortor sit amet mollis ultricies,
                  risus libero blandit neque, ut luctus elit tortor a ante. Nam
                  nec lorem risus. Fusce condimentum nibh non risus venenatis
                  rutrum quis finibus neque.
                </p>
              </div>
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};
export default ImageCarousel;
