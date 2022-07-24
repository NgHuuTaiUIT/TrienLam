import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";
import styles from "./style.module.scss";

const Carousel = ({ data }) => {
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
          slidesToShow: data.slides_per_view > 4 ? 4 : data.slides_per_view
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.slides_per_view > 3 ? 3 : 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: data.slides_per_view > 2 ? 2 : 1
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
