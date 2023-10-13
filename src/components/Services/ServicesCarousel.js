import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import pic1 from "../../public/floattest.jpg";
import pic2 from "../../../public/assets/logo.jpg";
const slides = [
  {
    title: "WanderSub",
    content: "Deep dive with us to explore the unexplored...",
    imageUrl:
      "https://www.lifehacker.com.au/wp-content/uploads/2022/08/11/0fdbc09e9747f05600d6608da9b9f7b6.jpg?resize=1024,576",
  },
  {
    title: "WanderFloat",
    content: "Wander the unwandered waters ",
    imageUrl: pic2,
  },
  {
    title: "Slide 3 Title",
    content: "Slide 3 Content...",
    imageUrl: pic2,
  },
  // Add more slides as needed
];

const AdvancedCarousel = () => {
  return (
    <div className="advanced-carousel">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        showArrows={true}
        className="rounded-lg shadow-lg" // Add custom Tailwind classes here
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide relative">
            <img
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className="h-64 w-full rounded-t-lg object-cover"
            />
            <div className="carousel-caption absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4 text-white">
              <h2 className="text-xl font-semibold">{slide.title}</h2>
              <p className="text-sm">{slide.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AdvancedCarousel;
