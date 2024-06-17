import React from 'react'

const ErrorSection = () => {
  return (
    <>
        <div className="error-section fix section-padding">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="error-items text-center">
          <div
            className="error-image wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
            <img src="../img/error.png" alt="img" />
          </div>
          <a
            href="/"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp"
            }}
          >
            BACK TO HOME
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ErrorSection