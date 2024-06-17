import React from 'react';

const ProjectSuccessful = () => {
  return (
    <section className="project-successful section-padding">
      <div className="container">
        <div className="section-title text-center wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '.3s', animationName: 'fadeInUp' }}>
          <h5>We completed <span className="text">1240+</span> projects successfully and continuously working</h5>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '.3s', animationName: 'fadeInUp' }}>
            <div className="project-successful-items">
              <div className="icon">
                <i className="fas fa-stars"></i>
              </div>
              <div className="content">
                <h5>
                  Our global <br /> customer
                </h5>
              </div>
              <div className="counter-text">
                <h2><span className="count">28</span>%</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '.5s', animationName: 'fadeInUp' }}>
            <div className="project-successful-items active">
              <div className="icon">
                <i className="fas fa-stars"></i>
              </div>
              <div className="content">
                <h5>
                  Our completed <br /> projects
                </h5>
              </div>
              <div className="counter-text">
                <h2><span className="count">45</span>%</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s" style={{ visibility: 'visible', animationDelay: '.7s', animationName: 'fadeInUp' }}>
            <div className="project-successful-items">
              <div className="icon">
                <i className="fas fa-stars"></i>
              </div>
              <div className="content">
                <h5>
                  Our expert <br /> worker
                </h5>
              </div>
              <div className="counter-text">
                <h2><span className="count">20</span>%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSuccessful;