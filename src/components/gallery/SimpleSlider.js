import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            arrows: true,
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className='slider-container'>
                <p>Familia :D</p>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                <Slider {...settings}>
                <div><img className="slider-image" src='/images/j2.jpg' /></div>
                <div><img className="slider-image" src='/images/j3.jpg' /></div>
                <div><img className="slider-image" src='/images/j4.jpg' /></div>
                <div><img className="slider-image" src='/images/j5.jpg' /></div>
                <div><img className="slider-image" src='/images/j6.jpg' /></div>
                </Slider>
            </div>
        );
      }
  }
