import React from 'react';
// import SwiperCore, {imported as Navigation } from 'swiper';p
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'assets/css/main.css'; // Assuming you have a CSS file for styling

// SwiperCore.use([Navigation]);p

const BrandSection = () => {
  return (
    <div className="brand-section-3 fix section-padding">
      <div className="layer-shape">
        <img src="../img/layer-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="brand-wrapper style-3">
          <Swiper
            className="brand-slider-2"
            navigation
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className="brand-image">
                <img src="../img/brand/01.png" alt="brand-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-image">
                <img src="../img/brand/02.png" alt="brand-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-image">
                <img src="../img/brand/03.png" alt="brand-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-image">
                <img src="../img/brand/04.png" alt="brand-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-image">
                <img src="../img/brand/05.png" alt="brand-img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
