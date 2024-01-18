import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './YourComponent.css';
import $ from 'jquery';

const Your = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    var $ = require('jquery');
    var slick = require('slick-carousel');
    const slider = sliderRef.current;

    // Add your slick settings here
    const settings = {
      dots: false,
      nav: false,
      arrows: false,
      infinite: true,
      speed: 1200,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    };

    // Initialize the slider
    slider.slick(settings);

    $(".slick-current").addClass("initialAnimation");

    let transitionSetup = {
      target: ".slick-list",
      enterClass: "u-scale-out",
      doTransition: function () {
        var slideContainer = document.querySelector(this.target);
        slideContainer.classList.add(this.enterClass);
        $(".slick-current").removeClass("animateIn");
      },
      exitTransition: function () {
        var slideContainer = document.querySelector(this.target);
        setTimeout(() => {
          slideContainer.classList.remove(this.enterClass);
          $(".slick-current").addClass("animateIn");
        }, 2000);
      }
    };

    var i = 0;
    $(".c-slider-init").on("beforeChange", function (
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      if (i === 0) {
        event.preventDefault();
        transitionSetup.doTransition();
        i++;
      } else {
        i = 0;
        transitionSetup.exitTransition();
      }

      $(".c-slider-init").slick("slickNext");
      $(".slick-current").removeClass("initialAnimation");
    });

    return () => {
      // Cleanup if needed
      slider.unslick();
    };
  }, [sliderRef]);

  return (
    <div>
      <section className='c-slider'>
        <Slider ref={sliderRef} className='c-slider-init'>
          <div className='c-slide'
            style={{ background: `url("https://images.unsplash.com/photo-1504461407194-07c608d0989b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=100")` }}>
            <div className='c-slide-content'>
              <div className='c-wrap c-wrap--line'>
                <h2 className='c-slide__title'>
                  Underwater
                  <span className='c-slide__title--large'>Monsters</span>
                </h2>
              </div>
              <div className='c-wrap c-wrap--small'>
                <div className='c-slide__info'>
                  <h3 className='c-slide__subtitle'>Saltwater Crocodile</h3>
                  <p className='c-slide__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='c-slide'
            style={{ background: `url("https://images.unsplash.com/photo-1544745494-3d8dd3fa1564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=100")` }}>
            <div className='c-slide-content'>
              <div className='c-wrap c-wrap--line'>
                <h2 className='c-slide__title'>
                  The
                  <span className='c-slide__title--medium'>Gates of Hell</span>
                </h2>
              </div>
              <div className='c-wrap c-wrap--small'>
                <div className='c-slide__info'>
                  <h3 className='c-slide__subtitle'>Special inside volcanoes</h3>
                  <p className='c-slide__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='c-slide'
            style={{ background: `url("https://images.unsplash.com/photo-1528214096798-37891d32174c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=100") ` }}>
            <div className='c-slide-content'>
              <div className='c-wrap c-wrap--line'>
                <h2 className='c-slide__title'>
                  Exploring
                  <span className='c-slide__title--large'>Deep Caves</span>
                </h2>
              </div>
              <div className='c-wrap c-wrap--small'>
                <div className='c-slide__info'>
                  <h3 className='c-slide__subtitle'>Real Time Capsules</h3>
                  <p className='c-slide__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Your;
