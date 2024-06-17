import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaBars } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { PiMapPin } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";




import "../assets/Sidebar.css"; // Make sure to create this CSS file for sidebar styles

const Sidebar = ({ isOpen, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [blogSubmenuOpen, setBlogSubmenuOpen] = useState(false);
  const [teamSubmenuOpen, setTeamSubmenuOpen] = useState(false);
  const [pagesSubmenuOpen, setPagesSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleBlogSubmenu = () => {
    setBlogSubmenuOpen(!blogSubmenuOpen);
  };

  const toggleTeamSubmenu = () => {
    setTeamSubmenuOpen(!teamSubmenuOpen);
  };

  const togglePagesSubmenu = () => {
    setPagesSubmenuOpen(!pagesSubmenuOpen);
  };

  return (
    <div className={`sidebarr ${isOpen ? "open" : ""}`}>
      <div className="sidebar-headerr">
        <div className="logot">
          <a href="index.html" className="header-logo">
            <img src="../img/logo/header-logo.svg" alt="logo-img" />
          </a>
        </div>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li className="has-dropdown">
            <Link to="/services" onClick={toggleSubmenu}>
              Services
            </Link>
            <ul className={`submenuu ${submenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/service-details" onClick={onClose}>
                  Service Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link to="/blog" onClick={toggleBlogSubmenu}>
              Blog
            </Link>
            <ul className={`submenuu ${blogSubmenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/blog" onClick={onClose}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sidebar" onClick={onClose}>
                  Blog Sidebar
                </Link>
              </li>
              <li>
                <Link to="/details" onClick={onClose}>
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link to="/team" onClick={toggleTeamSubmenu}>
              Team
            </Link>
            <ul className={`submenuu ${teamSubmenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/team" onClick={onClose}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/team-details" onClick={onClose}>
                  Team Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link to="/pages" onClick={togglePagesSubmenu}>
              Pages
            </Link>
            <ul className={`submenuu ${pagesSubmenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/project" onClick={onClose}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/testimonial" onClick={onClose}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/pricing" onClick={onClose}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={onClose}>
                  FAQ's
                </Link>
              </li>
              <li>
                <Link to="/404" onClick={onClose}>
                  404 Page
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>

              <div className="offcanvas__content">
                {/* <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  
                </div> */}
                <div className="mobile-menu fix mb-8" />
                <div className="offcanvas__contact">
                  <h4>&nbsp;&nbsp;Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon icont">
                        <PiMapPin/>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Main Street, Melbourne, Australia
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15 icont">
                        <FaRegEnvelope/>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="mailto:connect@idealsoft.com">
                          <span>connect@idealsoft.com</span>
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15 icont">
                        <FaRegClock/>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Mod-friday, 09am -05pm
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15 icont">
                        <BiPhoneCall/>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+11002345909">+11002345909</a>
                      </div>
                    </li>
                  </ul>
                  <div className="header-button mt-4">
                    <a href="/contact" className="theme-btn text-center toggle-btnn">
                      Contact Us
                    </a>
                  </div>
                  <div className="social-icon d-flex align-items-center mrl">
                    <a href="#" className="ss">
                      <FaFacebook/>
                    </a>
                    <a href="#" className="ss">
                      <FaTwitter/>
                    </a>
                    <a href="#" className="ss">
                      <TbBrandYoutube/>
                    </a>
                    <a href="#" className="ss">
                      <FaLinkedin/>
                    </a>
                  </div>
                </div>
              </div>
        {/* <div className="offcanvas__overlay" /> */}
      </nav>
    </div>
  );
};

export default Sidebar;
