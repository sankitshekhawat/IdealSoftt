import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Header Area Start --> */}
      <header>
        <div class="header-top">
          <div class="container-fluid">
            <div class="header-top-wrapper">
              <ul>
                <li>
                  <i class="fal fa-map-marker-alt me-2"></i> Kesari Chand
                  Choudhary Nagar Jaipur
                </li>
                <li>
                  <i class="fal fa-envelope me-2"></i>
                  <a href="mailto:connect@idealsoft.com">
                    <span>connect@idealsoft.com</span>
                  </a>
                </li>
              </ul>
              <div class="social-icon d-flex align-items-center">
                <span class="me-3">Follow us:</span>
                <a href="#">
                  <i class="fab fa-facebook-f me-3"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter me-3"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube me-3"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" class="header-2">
          <div class="container-fluid">
            <div class="mega-menu-wrapper">
              <div class="header-main">
                <div class="header-left">
                  <div class="logo">
                    <a href="index.html" class="header-logo">
                      <img src="../img/logo/header-logo.svg" alt="logo-img" />
                    </a>
                  </div>
                  <div class="mean__menu-wrapper d-none d-lg-block">
                    <div class="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li class="has-dropdown active menu-thumb">
                            {/* <a href="index.html"> Home </a> */}
                            <Link to="/" className="a">Home</Link>
                          </li>
                          <li>
                            {/* <a href="about.html">About</a> */}
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/services">
                              Services
                              <i class="fas fa-angle-down"></i>
                            </Link>
                            <ul class="submenu">
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
                              <i class="fas fa-angle-down"></i>
                            </Link>
                            <ul class="submenu">
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
                          <li class="has-dropdown">
                            <Link to="/pages">
                              Pages
                              <i class="fas fa-angle-down"></i>
                            </Link>
                            <ul class="submenu">
                              <li class="has-dropdown">
                                <Link to="/project">Projects</Link>
                              </li>
                              <li class="has-dropdown">
                                <Link to="/team">
                                  Team
                                  <i class="fas fa-angle-down"></i>
                                </Link>
                                <ul class="submenu">
                                  <li>
                                    <Link to="/team">Team</Link>
                                  </li>
                                  <li>
                                    <Link to="/team-details">Team Details</Link>
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
                <div class="header-right d-flex justify-content-end align-items-center">
                  <div class="search-wrp">
                    <input placeholder="Search...." aria-label="Search" />
                    <button>
                      <i class="far fa-search"></i>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link to="/contactUs" className="theme-btn">
                      GET A QUOTE
                    </Link>
                  </div>
                  <div class="header__hamburger d-lg-none my-auto">
                    <div class="sidebar__toggle">
                      <i class="far fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
