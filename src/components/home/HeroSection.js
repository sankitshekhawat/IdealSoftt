import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import {  PiPlayFill } from "react-icons/pi";






const HeroSection = () => {
  return (
    <>
        {/* <!-- Hero Section Start --> */}
  <section class="hero-section-4 hero-4">
    <div class="swiper hero-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="hero-image bg-cover" Style = {{ backgroundImage: `url('../img/hero/07.jpg')`}}></div>
          <div class="shape-image" data-animation="fadeInLeft" data-delay="2.1s">
            <img src="../img/hero/shape-3.png" alt="shape-img" />
          </div>
          <div class="shape-image-2" data-animation="fadeInRight" data-delay="2.3s">
            <img src="../img/hero/shape-4.png" alt="shape-img" />
          </div>
          <div class="box-shape" data-animation="fadeInRight" data-delay="2.4s">
            <img src="../img/hero/box-shape.png" alt="shape-img" />
          </div>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-xl-8">
                <div class="hero-content">
                  <div class="d-sm-inline video-play-btn">
                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-popup ripple play-video"
                      data-animation="fadeInUp" data-delay="1.3s">
                      {/* <i class="fas fa-play"></i> */}
                        <PiPlayFill
                        />
                      </a>
                    <span class="ms-3 d-line" data-animation="fadeInUp" data-delay="1.3s">Showreel</span>
                  </div>
                  <h1 class="text-white" data-animation="fadeInUp" data-delay="1.5s">
                    We’re a Expert <br /> Digital Marketing <br /> Agency.
                  </h1>
                  <div class="hero-button">
                    <a href="contact.html" data-animation="fadeInUp" data-delay="1.7s"
                      class="theme-btn hover-white">DISCOVER MORE</a>
                    <div className="d-sm-inline contact-icon " data-animation="fadeInUp" data-delay="1.7s">
                      {/* <i class="fal fa-phone-alt"></i> */}
                      <span><FiPhoneCall /></span>                
                        <a href="tel:+91 96538 20555">+91 96538 20555</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="array-button">
                  <button class="array-prev">
                    {/* <i class="fal fa-arrow-right"></i> */}
                    <FaArrowRightLong/>
                  </button>
                  <button class="array-next">
                    {/* <i class="fal fa-arrow-left"></i> */}
                    <FaArrowLeftLong/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="swiper-slide">
          <div class="hero-image bg-cover" Style = {{ backgroundImage: `url('../img/hero/08.jpg')`}}></div>
          <div class="shape-image" data-animation="fadeInLeft" data-delay="2.1s">
            <img src="../img/hero/shape-3.png" alt="shape-img" />
          </div>
          <div class="shape-image-2" data-animation="fadeInRight" data-delay="2.3s">
            <img src="../img/hero/shape-4.png" alt="shape-img" />
          </div>
          <div class="box-shape" data-animation="fadeInRight" data-delay="2.4s">
            <img src="../img/hero/box-shape.png" alt="shape-img" />
          </div>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-xl-8">
                <div class="hero-content">
                  <div class="d-sm-inline video-play-btn">
                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-popup ripple play-video"
                      data-animation="fadeInUp" data-delay="1.3s"><i class="fas fa-play"></i></a>
                    <span class="ms-3 d-line" data-animation="fadeInUp" data-delay="1.3s">Showreel</span>
                  </div>
                  <h1 class="text-white" data-animation="fadeInUp" data-delay="1.5s">
                    We’re a Full- <br /> Range Digital <br /> Agency.
                  </h1>
                  <div class="hero-button">
                    <a href="index.html" data-animation="fadeInUp" data-delay="1.7s"
                      class="theme-btn hover-white">DISCOVER MORE</a>
                    <div class="d-sm-inline contact-icon" data-animation="fadeInUp" data-delay="1.7s">
                      <i class="fal fa-phone-alt"></i>
                      <a href="tel:+19993452577">+1 (999) 345 2577</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="array-button">
                  <button class="array-prev">
                    <i class="fal fa-arrow-right"></i>
                  </button>
                  <button class="array-next">
                    <i class="fal fa-arrow-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="hero-image bg-cover" style = {{ backgroundImage: `url('../img/hero/09.jpg')`}}></div>
          <div class="shape-image" data-animation="fadeInLeft" data-delay="2.1s">
            <img src="../img/hero/shape-3.png" alt="shape-img" />
          </div>
          <div class="shape-image-2" data-animation="fadeInRight" data-delay="2.3s">
            <img src="../img/hero/shape-4.png" alt="shape-img" />
          </div>
          <div class="box-shape" data-animation="fadeInRight" data-delay="2.4s">
            <img src="../img/hero/box-shape.png" alt="shape-img" />
          </div>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-xl-8">
                <div class="hero-content">
                  <div class="d-sm-inline video-play-btn">
                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-popup ripple play-video"
                      data-animation="fadeInUp" data-delay="1.3s"><i class="fas fa-play"></i></a>
                    <span class="ms-3 d-line" data-animation="fadeInUp" data-delay="1.3s">Showreel</span>
                  </div>
                  <h1 class="text-white" data-animation="fadeInUp" data-delay="1.5s">
                    We’re a Best <br /> IT Solutions <br /> Agency.
                  </h1>
                  <div class="hero-button">
                    <a href="index.html" data-animation="fadeInUp" data-delay="1.7s"
                      class="theme-btn hover-white">contact us</a>
                    <div class="d-sm-inline contact-icon" data-animation="fadeInUp" data-delay="1.7s">
                      <i class="fal fa-phone-alt"></i>
                      <a href="tel:+19993452577">+1 (999) 345 2577</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="array-button">
                  <button class="array-prev">
                    <i class="fal fa-arrow-right"></i>
                  </button>
                  <button class="array-next">
                    <i class="fal fa-arrow-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
    </>
  )
}

export default HeroSection