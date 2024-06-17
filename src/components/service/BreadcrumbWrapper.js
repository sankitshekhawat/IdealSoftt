import React from 'react';
import {Link} from 'react-router-dom'

const BreadcrumbWrapper = () => {
  return (
    <div className="breadcrumb-wrapper bg-cover section-padding" style={{ backgroundImage: "url('../img/breadcrumb.jpg')" }}>
      <div className="layer-shape wow fadeInLeft" data-wow-delay=".3s">
        <img src="../img/layer-shape-3.png" alt="shape-img" />
      </div>
      <div className="breadcrumb-shape wow fadeInRight" data-wow-delay=".5s">
        <img src="../img/breadcrumb-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s">Service</h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">
                Home Page
              </Link>
            </li>
            <li>
              <i className="fal fa-minus"></i>
            </li>
            <li>
              Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbWrapper;