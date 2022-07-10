import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.scss";
import data from "../../assets/data/data.json";
import Card from "./Card";

const Carousel = ({ data }) => {
  console.log(data);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: data.slides_per_view,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-primary-bg ">
      <div>
        <Slider {...settings} className={styles.sliderWrapper}>
          {data.items.map((item, idx) => (
            <div key={idx} className="px-2">
              <Card data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
