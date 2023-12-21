import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlider.css'

const MainSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      <div className="slider-item">
        <img src="assets/banner1.png" alt="Envio gratis VR" />
      </div>
      <div className="slider-item">
        <img src="assets/banner2.png" alt="Spring Summer" />
      </div>
      <div className="slider-item">
        <img src="assets/banner3.png" alt="3 Cuotas sin interes" />
      </div>
    </Slider>
  );
};

export default MainSlider;
