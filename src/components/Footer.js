import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiVimeo } from "react-icons/tfi";
import { PiPinterestLogo } from "react-icons/pi";
import { LuSend } from "react-icons/lu";



import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
          {/* <!-- Footer Section Start --> */}
  <footer class="footer-section style-2 fix bg-cover">
    <div class="container">
      <div class="footer-widgets-wrapper">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <a href="index.html">
                  <img src="../img/logo/footer-logo.svg" alt="logo-img" />
                </a>
              </div>
              <div class="footer-content">
                <p>
                  Address SHIV TAMPLE, KCC Nagar,  <br /> Heerapura, Jaipur, Rajasthan 302021
                </p>
                <h6><a href="tel:+19993452577">+(91) 96538 20555</a></h6>
                <div class="social-icon d-flex align-items-center">
                  <a href="#"><FaFacebook/></a>
                  <a href="#"><FaTwitter/></a>
                  <a href="#" class="active"><TfiVimeo/></a>
                  <a href="#"><PiPinterestLogo/></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Navigation</h3>
              </div>
              <ul class="list-area">
                <li><Link to="about">About Us</Link></li>
                <li><a href="portfolio-details.html">Portfolio</a></li>
                <li><Link to="service-details">Services</Link></li>
                <li><a href="news-details.html">News</a></li>
                <li><Link to="contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 ps-lg-5 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Services</h3>
              </div>
              <ul class="list-area">
                <li><Link to="service-details">Web Design</Link></li>
                <li><Link to="service-details">Development</Link></li>
                <li><Link to="service-details">Digital Marketing</Link></li>
                <li><Link to="service-details">Art Direction</Link></li>
                <li><Link to="service-details">Product Design</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Subscribe</h3>
              </div>
              <div class="footer-content">
                <div class="footer-input">
                  <input type="email" placeholder="Subscribe our newsletter" />
                  <button class="newsletter-button" type="submit">
                   <LuSend/>
                  </button>
                </div>
                <p>
                  The ultimate Webflow template for agencies <br /> startups, and small businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-wrapper">
          <p>Copyright © 2024 IdealSoft</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
  {/* <!-- Back To Top Start --> */}
  <div class="scroll-up">
    <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
    </>
  )
}

export default Footer