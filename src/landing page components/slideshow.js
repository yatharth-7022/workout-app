import React, { useEffect, useState } from "react";
import "./slideshow.css"; // Import CSS for styling

// Import images
import image1 from ".././assets/landing-page images/image1.jpg";
import image2 from ".././assets/landing-page images/image2.jpg";
import image3 from ".././assets/landing-page images/image3.jpg";

const Slideshow = () => {
  const images = [image1, image2, image3]; // Use imported images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
