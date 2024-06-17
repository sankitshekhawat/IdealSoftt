import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaBars } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { PiMapPin } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa6";


// import "../assets/css/meanmenu.css";

const Header = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
    
      <>
        {/*<< Mouse Cursor Start >>*/}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />

        
        {/* Offcanvas Area Start */}
        <div className="fix-area">
        <div className={`offcanvas__info` }>

            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <a href="index.html">
                      <img
                        src="assets/img/logo/header-logo.svg"
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div className="offcanvas__close">
                    <button>
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="mobile-menu fix mb-3" />
                <div className="offcanvas__contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Main Street, Melbourne, Australia
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="mailto:connect@idealsoft.com">
                          <span>connect@idealsoft.com</span>
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Mod-friday, 09am -05pm
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+11002345909">+11002345909</a>
                      </div>
                    </li>
                  </ul>
                  <div className="header-button mt-4">
                    <a href="contact.html" className="theme-btn text-center">
                      Contact Us
                    </a>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas__overlay" /> 
      

      {/* <!-- Header Area Start --> */}
      <header >
        <div className="header-top">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul>
                <li>
                  <PiMapPin/> Kesari Chand
                  Choudhary Nagar Jaipur
                </li>
                <li>
                  <FaRegEnvelope className="mrgn"/>
                  <a href="mailto:connect@idealsoft.com">
                    <span>connect@idealsoft.com</span>
                  </a>
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center gap-2">
                <span className="me-3">Follow us:</span>
                <a href="#">
                  {/* <i class="fab fa-facebook-f me-3"></i> */}
                  <FaFacebook className="tt" />
                </a>
                <a href="#">
                  {/* <i class="fab fa-twitter me-3"></i> */}
                  <FaTwitter className="tt" />
                </a>
                <a href="#">
                  {/* <i class="fab fa-youtube me-3"></i> */}
                  <TbBrandYoutube className="tt" />
                  {/* <AiOutlineYoutube className="tt"/> */}
                  {/* <PiYoutubeLogoThin className="tt"/> */}
                </a>
                <a href="#">
                  {/* <i class="fab fa-linkedin-in"></i> */}
                  <FaLinkedin className="tt" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-2">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <a href="index.html" className="header-logo">
                      <img src="../img/logo/header-logo.svg" alt="logo-img" />
                    </a>
                  </div>
                  <div className="mean__menu-wrapper d-lg-block ">
                      <div className="main-menu">
                    
                        <nav id="mobile-menu">
                          <ul>
                            <li className="has-dropdown active menu-thumb">
                              {/* <a href="index.html"> Home </a> */}
                              <Link to="/" className="a">
                                Home
                              </Link>
                            </li>
                            <li>
                              {/* <a href="about.html">About</a> */}
                              <Link to="/about">About</Link>
                            </li>
                            <li>
                              <Link to="/services">
                                Services
                                <i className="fas fa-angle-down"></i>
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link to="/service-details">
                                    Service Details
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/blog">
                                Blog
                                <i className="fas fa-angle-down"></i>
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/sidebar">Blog Sidebar</Link>
                                </li>
                                <li>
                                  <Link to="/details">Blog Details</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/hire"> Hiring </Link>
                            </li>
                            <li className="has-dropdown">
                              <Link to="/pages">
                                Pages
                                <i className="fas fa-angle-down"></i>
                              </Link>
                              <ul className="submenu">
                                <li className="has-dropdown">
                                  <Link to="/project">Projects</Link>
                                </li>
                                <li className="has-dropdown">
                                  <Link to="/team">
                                    Team
                                    <i className="fas fa-angle-down"></i>
                                  </Link>
                                  <ul className="submenu">
                                    <li>
                                      <Link to="/team">Team</Link>
                                    </li>
                                    <li>
                                      <Link to="/team-details">
                                        Team Details
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link to="/testimonial">testimonial</Link>
                                </li>
                                <li>
                                  <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                  <Link to="/faq">Faq's</Link>
                                </li>
                                <li>
                                  <Link to="/404">404 Page</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                    
                      </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center ">
                  <div className="search-wrp">
                    <input placeholder="Search...." aria-label="Search" />
                    <button>
                      {/* <i className="far fa-search" /> */}
                      <BsSearch />
                    </button>
                  </div>
                  <div className="header-button ">
                    <Link to="/contactUs" className="theme-btn">
                      GET A QUOTE
                    </Link>
                  </div>
                  <div
                    className="header__hamburger d-lg-none my-auto" 
                  >
                    <div className="sidebar__toggle" onClick={handleToggleClick}>
                      <FaBars />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={handleToggleClick} />
    </>
  );
};

export default Header;
