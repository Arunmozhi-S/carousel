import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "axios";

const Carousel = () => {
  const [present, setPresent] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get("pictures.json").then((res) => setSlides(res.data));
  }, []);

  const nextImage = () => {
    setPresent(present === slides.length - 1 ? 0 : present + 1);
  };

  const prevImage = () => {
    setPresent(present === 0 ? slides.length - 1 : present - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left" onClick={prevImage} />
      <FaArrowAltCircleRight className="right" onClick={nextImage} />
      {slides.map((slide) => (
        <div
          className={slide.id === present ? "slideActive" : "slide"}
          key={slide.id}
        >
          {slide.id === present && (
            <img className="image" src={slide.image} alt={slide.alt} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
