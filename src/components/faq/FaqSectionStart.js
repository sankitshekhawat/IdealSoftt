import React from 'react'
import { FaSearch } from "react-icons/fa";


const FaqSectionStart = () => {
  return (
    <>
        <section className="faq-section fix section-padding">
  <div className="container">
    <div className="faq-wrapper-2">
      <div className="faq-items">
        <div className="section-title mb-0">
          <span
            className="wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Our question and answer
          </span>
          <h2
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
            Frequently asked question <br /> &amp; answer here
          </h2>
        </div>
        <div className="faq-image">
          <img src="../img/faq.png" alt="faq-img" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="faq-sidebar">
            <div
              className="search-widget wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <form action="#">
                <input type="text" placeholder="Search...." />
                <button type="submit">
                <FaSearch/>
                </button>
              </form>
            </div>
            <div
              className="side-post bg-cover wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                backgroundImage: 'url("../img/faq/faq-4.jpg")',
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <h3>
                Azent a smart <br /> agency
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-1" />
        <div className="col-lg-6">
          <div className="faq-content style-2">
            <div className="faq-accordion">
              <div className="accordion" id="accordion">
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp"
                  }}
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      How can we improve the lead generation process?
                    </button>
                  </h5>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      The main elements of a marketing strategy are your target
                      audiance goals and objectives and the tax you will employ
                      to acitvely markter to your achive the goals
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp"
                  }}
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      What is content marketing stratagy?
                    </button>
                  </h5>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      The main elements of a marketing strategy are your target
                      audiance goals and objectives and the tax you will employ
                      to acitvely markter to your achive the goals
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.7s",
                    animationName: "fadeInUp"
                  }}
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      What is the purpose of digital agency?
                    </button>
                  </h5>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      The main elements of a marketing strategy are your target
                      audiance goals and objectives and the tax you will employ
                      to acitvely markter to your achive the goals
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInUp"
                  }}
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      Can I success on this platform with my experience?
                    </button>
                  </h5>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      The main elements of a marketing strategy are your target
                      audiance goals and objectives and the tax you will employ
                      to acitvely markter to your achive the goals
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".9s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.9s",
                    animationName: "fadeInUp"
                  }}
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="false"
                      aria-controls="faq5"
                    >
                      Can I success on this platform with my experience?
                    </button>
                  </h5>
                  <div
                    id="faq5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      The main elements of a marketing strategy are your target
                      audiance goals and objectives and the tax you will employ
                      to acitvely markter to your achive the goals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default FaqSectionStart