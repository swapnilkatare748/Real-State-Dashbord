import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { FaChevronDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/pagination";
import { properties } from "../../../source";
import './Properties.css';

function Properties() {
  const [show, setShow] = useState(false);

  return (
    <div className="properties-wrapper">
      <div className="flex-center top">
        <h1>Properties</h1>
        <div className="drop-container">
          <ClickAwayListener onClickAway={() => setShow(false)}>
            <div>
              <div
                className="flex-center icon-wrapper drop-dtn"
                onClick={() => setShow(!show)}
              >
                <FaChevronDown />
              </div>
              {show && (
                <ul className="dropDown">
                  <li className="drop-item">For Sale</li>
                  <li className="drop-item">For Rent</li>
                </ul>
              )}
            </div>
          </ClickAwayListener>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="properties-Container"
        breakpoints={{
          600: { slidesPerView: 3 },
        }}
        modules={[Pagination, FreeMode, Autoplay]}
      >
        {properties.map((property, index) => (
          <SwiperSlide className="property" key={index}>
            <img src={property.image} alt="property image" />
            <div className="flex details-container">
              <p className="clamp-1 title">{property.title}</p>
              <h3 className="price">{property.price}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Properties;
