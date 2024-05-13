import React, { useEffect } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRightLong } from "react-icons/fa6";

import sliderImg from '../assets/services/Mobile Applications.jpg'
import sliderImgTWo from '../assets/images/slider-image.jpg'
import certifiedimg from '../assets/heroimg/iso1.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
// import AnimatedButton from "./AnimatedCard.js/AnimatedButton";
// import SliderOne from '../assets/slidervideos/4884238-uhd_2160_3840_30fps.mp4'
import SliderOne from '../assets/slidervideos/SliderOne.mp4'

import SliderTwo from '../assets/slidervideos/SliderTwo.mp4'
import Link from "next/link";


export default function SimpleSlider() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true, // Enable fade animation
    pauseOnHover: true
  };
  return (
    <Slider {...settings} className=" relative overflow-hidden">
      <div className="slider-item  ">
        <Link href="/">
          <div className="">
            <div className="relative container mx-auto  ">
              <h3 data-aos='fade-left' data-aos-delay='200' data-aos-once='true' className="text-white absolute lg:text-xl text-xs lg:left-20 left-10 lg:top-48    ">Empowering Innovation, Accelerating Success </h3>
              <h1 data-aos='fade-left' data-aos-delay='300' data-aos-once='true' className="text-white absolute lg:text-6xl text-md font-semibold lg:left-20  left-10 lg:top-60    ">Seamless Transition into <br /> The Digital Future</h1>
              <p data-aos='fade-left' data-aos-delay='400' data-aos-once='true' className="text-white absolute lg:text-lg text-xs lg:left-20  left-10 lg:top-[390px] ">From Cloud to AI and beyond, we offer tailored solutions for Agility, Scalability, & Growth.</p>
              <Link href='/services'>
                <div data-aos='fade-left' data-aos-delay='500' data-aos-once='true' className='lg:left-20 lg:top-[450px]  left-10   absolute z-50  '>

                  {/* <AnimatedButton /> */}
                </div>
              </Link>
            </div>
              <ReactPlayer
                className="react-player "
                url={SliderOne}
                width="full"
                height="full"
                playing={true}
                controls={false}
                loop={true}
                muted={true}
              />
          </div>
        </Link>
      </div>
      <div  className="slider-item">
        <Link href="/">
          <div>
            <div className="relative container mx-auto">
              <h3 data-aos='fade-left' data-aos-delay='550' data-aos-once='true' className="text-white absolute lg:text-xl text-xs lg:left-20 left-10 lg:top-48 top-14">Empowering Innovation, Accelerating Success </h3>
              <h1 data-aos='fade-left' data-aos-delay='600' data-aos-once='true' className="text-white absolute lg:text-6xl text-md font-semibold lg:left-20  left-10 lg:top-60 top-[70px]  ">Innovate |
                Transform |
                <br /> Succeed</h1>
              <p data-aos='fade-left' data-aos-delay='700' data-aos-once='true' className="text-white absolute lg:text-lg text-xs lg:left-20 left-10 lg:top-[390px] top-[115px]">Redefining Possibilities for your Business with Transformative Solutions that Drives Success, Today & Beyond.</p>
              <Link href='/services'>


                <div data-aos='fade-left' data-aos-delay='800' data-aos-once='true' className='lg:left-20 left-10 lg:top-[450px] top-[170px]  absolute z-50 '>

                  {/* <AnimatedButton /> */}

                </div>
              </Link>

            </div>
            <ReactPlayer
              className="react-player "
              url={SliderTwo}
              width="100%"
              height="100%"
              playing={true}
              controls={false}
              loop={true}
              muted={true}
            />
          </div>
        </Link>
      </div>
    </Slider>
  );
}
