import React from 'react'
import TestimonialData from '../../utils/TestimonialData';



const TestimonialSection = () => {
  return (
    <>
        <section className="testimonial-section section-padding fix section-bg">
  <div className="container">
    <div className="row">
      {TestimonialData.map(({imgsrc,quoteright,para,name,designation},index) => 
        <div
      key={index}
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        <div className="testimonial-card-items">
          <div
            className="testimonial-image bg-cover"
            style={{ backgroundImage: `url(${imgsrc})` }}
          />
          <div className="icon">
            {quoteright}
          </div>
          <div className="testimonial-content">
            <p>
             {para}
            </p>
            <h4>{name}</h4>
            <span>{designation}</span>
          </div>
        </div>
      </div>
    )}
    </div>
  </div>
</section>

    </>
  )
}

export default TestimonialSection