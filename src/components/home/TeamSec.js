import React from "react";
import TeamData from "../../utils/TeamData";

const TeamSec = () => {
  return (
    <section className="team-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Our team members
          </span>
          <h2
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            The amazing team behind IdealSoft
          </h2>
        </div>
        <div className="row">
          {TeamData.map(
            (
              {
                imgsrc,
                name,
                designation,
                linkdin,
                instagram,
                facebook,
                share,
              },
              index
            ) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="team-card-items style-2">
                  <div
                    className="team-image bg-cover"
                    style={{ backgroundImage: `url(${imgsrc})` }}
                  >
                    <div className="team-content-2">
                      <h4>
                        <a href="team-details.html" className="teamblog">
                          {name}
                        </a>
                      </h4>
                      <p>{designation}</p>
                    </div>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <a href="#">
                            {linkdin}
                            {/* linkdin */}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* instagram */}
                            {instagram}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* facebook */}
                            {facebook}
                          </a>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        {/* share */}
                        {share}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
