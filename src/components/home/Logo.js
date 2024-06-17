import React from 'react'

const Logo = () => {
  return (
    <>
         {/* <!-- Preloader Start --> */}
  {/* <div id="preloader" class="preloader">
    <div class="animation-preloader">
      <div class="spinner"></div>
      <div class="txt-loading">
        <span data-text-preloader="I" class="letters-loading"> I </span>
        <span data-text-preloader="D" class="letters-loading"> D </span>
        <span data-text-preloader="E" class="letters-loading"> E </span>
        <span data-text-preloader="A" class="letters-loading"> A </span>
        <span data-text-preloader="L" class="letters-loading"> L </span>
        <span data-text-preloader="S" class="letters-loading"> S </span>
        <span data-text-preloader="O" class="letters-loading"> O </span>
        <span data-text-preloader="F" class="letters-loading"> F </span>
        <span data-text-preloader="T" class="letters-loading"> T </span>
      </div>
      <p class="text-center">Loading</p>
    </div>
    <div class="loader">
      <div class="row">
        <div class="col-3 loader-section section-left">
          <div class="bg"></div>
        </div>
        <div class="col-3 loader-section section-left">
          <div class="bg"></div>
        </div>
        <div class="col-3 loader-section section-right">
          <div class="bg"></div>
        </div>
        <div class="col-3 loader-section section-right">
          <div class="bg"></div>
        </div>
      </div>
    </div>
  </div> */}
  {/* <!--<< Mouse Cursor Start >>--> */}
  <div class="mouse-cursor cursor-outer"></div>
  <div class="mouse-cursor cursor-inner"></div>
  {/* <!-- Offcanvas Area Start --> */}
  <div class="fix-area">
    <div class="offcanvas__info">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__content">
          <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
            <div class="offcanvas__logo">
              <a href="index.html">
                <img src="../img/logo/header-logo.svg" alt="logo-img" />
              </a>
            </div>
            <div class="offcanvas__close">
              <button>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div class="mobile-menu fix mb-3"></div>
          <div class="offcanvas__contact">
            <h4>Contact Info</h4>
            <ul>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon">
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a href="mailto:connect@idealsoft.com"><span>connect@idealsoft.com</span></a>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                  <i class="fal fa-clock"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                  <i class="far fa-phone"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a href="tel:+11002345909">+11002345909</a>
                </div>
              </li>
            </ul>
            <div class="header-button mt-4">
              <a href="contact.html" class="theme-btn text-center">
                Contact Us
              </a>
            </div>
            <div class="social-icon d-flex align-items-center">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offcanvas__overlay"></div>
    </>
)
}

export default Logo