import React from 'react'

const CtaSection = () => {
  return (
    <>
        <section
  className="cta-section-3 fix section-padding bg-cover bg-cta"
  style={{ backgroundImage: 'url("../img/cta-banner/02.jpg")' }}
>
  <div className="container">
    <div className="cta-wrapper-3">
      <h2
        className="text-white wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        Make your website unforgettable <br /> join the azent community
      </h2>
      <a
        href="contact.html"
        className="theme-btn hover-white wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        JOIN TO DOWNLOAD
      </a>
    </div>
  </div>
</section>

    </>
  )
}

export default CtaSection