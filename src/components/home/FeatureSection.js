import React from 'react'

const FeatureSection = () => {
  return (
    <>
         {/* <!-- Feature Section  Start --> */}
  <section class="feature-section fix section-padding pt-0">
    <div class="container">
      <div class="feature-wrapper">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-6">
            <div class="feature-content">
              <div class="section-title">
                <span class="wow fadeInUp">We are IdealSoft digital agency</span>
                <h2 class="wow fadeInUp" data-wow-delay=".3s">
                  Great digital <br /> agency since 1999
                </h2>
              </div>
              <p class="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                The main elements of a marketing strategy are your target goals and objectives and the tax you will
                employ to <br /> markter to your achive the goals you
              </p>
              <div class="feature-button wow fadeInUp" data-wow-delay=".7s">
                <a href="about.html" class="theme-btn">DISCOVER MORE</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
            <div class="feature-image">
              <img src="../img/choose/feature.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default FeatureSection