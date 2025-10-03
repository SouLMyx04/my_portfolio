import React, { useRef, useEffect, useState } from "react";
import cruds from "../assets/videos/cruds.mp4";
import responsive_website from "../assets/videos/responsive_website.mp4";
import map_navigation from "../assets/videos/map_navigation.mp4";
import payment_gateway from "../assets/videos/payment_gateway.mp4";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Project = () => {
  const popupRef = useRef(null);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = (src) => {
    if (popupRef.current && videoRef.current) {
      popupRef.current.style.display = "block";
      videoRef.current.src = src;
    }
  };

  const closePopup = () => {
    if (popupRef.current && videoRef.current) {
      popupRef.current.style.display = "none";
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // project cards
  const projectCards = [
    {
      title: "Responsive Website",
      info:
        "Responsive website is a type of website that adjusts its layout and design depending on the device being used, like a computer, tablet, or phone. It makes sure the content looks good and is easy to read without zooming or scrolling sideways.",
      video: responsive_website,
      className: "responsive-website",
    },
    {
      title: "C.R.U.D.S.",
      info:
        "CRUDS is the set of basic functions used to manage and interact with data in a database or application: Create, Read, Update, Delete, and Search.",
      video: cruds,
      className: "cruds",
    },
    {
      title: "Maps navigation",
      info:
        "Map navigation is the process of using a digital or physical map to determine directions, routes, and locations in order to reach a specific destination.",
      video: map_navigation,
      className: "maps-navigation",
    },
    {
      title: "Payment gateway",
      info:
        "A payment gateway is a technology service that securely processes and authorizes online payments between a customer and a merchant, usually by connecting the website/app to banks or payment providers.",
      video: payment_gateway,
      className: "payment-gateway",
    },
  ];

  return (
    <div className="Project" id="project">
      <div className="project-container">
        <div className="projects">
          <h2>Projects</h2>
        </div>

        {isMobile ? (
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projectCards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={card.className}
                  onClick={() => openPopup(card.video)}
                >
                  <div className="video-container">
                    <video src={card.video} muted></video>
                  </div>
                  <div className="video-info">
                    {card.title}
                    <div className="info">{card.info}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="projects-container">
            {projectCards.map((card, idx) => (
              <div
                key={idx}
                className={card.className}
                onClick={() => openPopup(card.video)}
              >
                <div className="video-container">
                  <video src={card.video} muted></video>
                </div>
                <div className="video-info">
                  {card.title}
                  <div className="info">{card.info}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Popup video */}
        <div className="popup-video" ref={popupRef}>
          <span onClick={closePopup}>&times;</span>
          <video ref={videoRef} autoPlay controls></video>
        </div>
      </div>
    </div>
  );
};


export default Project;


