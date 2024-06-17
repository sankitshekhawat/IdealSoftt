import React from 'react'
import { AiOutlineCloudServer } from "react-icons/ai";
import { TbCloudComputing } from "react-icons/tb";
import { GrCloudComputer } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const ChooseUs = () => {
  return (
    <>
         {/* <!-- Choose Us Section Start --> */}
         <section className="choose-us-section fix section-padding">
  <div className="left-shape float-bob-y">
    <img src="../img/shape-5.png" alt="shape-img" />
  </div>
  <div className="container">
    <div className="choose-wrapper style-2 mb-0">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="choose-image-items">
            <div
              className="choose-image bg-cover wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                backgroundImage: 'url("../img/choose/03.jpg")',
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <div className="box-shape">
                <img src="../img/about/box-shape.png" alt="shape-img" />
              </div>
            </div>
            <div
              className="choose-image-2 wow fadeInRight"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInRight"
              }}
            >
              <img src="../img/choose/04.jpg" alt="choose-img" />
            </div>
            <div className="icon-box">
              {/* <i className="flaticon-send" /> */}
                <LuSend/>
              <div className="circle-text">
                <img
                  src="../img/circle-text.png"
                  alt="img"
                  className="text-circle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
          <div className="choose-content">
            <div
              className="section-title wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <h2>
                Explore worlds leading <br /> local and gloabl agencies
              </h2>
            </div>
            <p
              className="mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
              dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget
              tincidunt <br /> ipsum. Eget tincidunt
            </p>
            <div
              className="icon-area style-2 wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp"
              }}
            >
              <div className="icon-items active">
                <div className="icon">
                  {/* <i className="flaticon-server" /> */}
                  <GrCloudComputer/>
                  {/* sandeep */}
                </div>
                <div className="content">
                  <h5>Cloud based</h5>
                  <p>
                    Nullam eu nibh vitae est tempor molestie <br /> Quisque
                    dignissim maximus ipsum
                  </p>
                </div>
              </div>
              <div className="icon-items">
                <div className="icon">
                  {/* <i className="flaticon-maintenance" /> */}
                  <MdSecurity />
                </div>
                <div className="content">
                  <h5>Technical support</h5>
                  <p>
                    Nullam eu nibh vitae est tempor molestie <br /> Quisque
                    dignissim maximus ipsum
                  </p>
                </div>
              </div>
            </div>
            <div
              className="about-author wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                visibility: "visible",
                animationDelay: "0.9s",
                animationName: "fadeInUp"
              }}
            >
              <div className="about-button">
                <a href="about.html" className="theme-btn">
                  {" "}
                  Discover More{" "}
                </a>
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

export default ChooseUs