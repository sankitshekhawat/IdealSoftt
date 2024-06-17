import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div
  className="breadcrumb-wrapper section-padding bg-cover"
  style={{ backgroundImage: 'url("../img/breadcrumb.jpg")' }}
>
  <div
    className="layer-shape wow fadeInLeft"
    data-wow-delay=".3s"
    style={{
      visibility: "visible",
      animationDelay: "0.3s",
      animationName: "fadeInLeft"
    }}
  >
    <img src="../img/layer-shape-3.png" alt="shape-img" />
  </div>
  <div
    className="breadcrumb-shape wow fadeInRight"
    data-wow-delay=".5s"
    style={{
      visibility: "visible",
      animationDelay: "0.5s",
      animationName: "fadeInRight"
    }}
  >
    <img src="../img/breadcrumb-shape.png" alt="shape-img" />
  </div>
  <div className="container">
    <div className="page-heading">
      <h1
        className="wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        Blog Details
      </h1>
      <ul
        className="breadcrumb-items wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="fal fa-minus" />
        </li>
        <li>Blog Details</li>
      </ul>
    </div>
  </div>
</div>

)
}

export default Breadcrumb;