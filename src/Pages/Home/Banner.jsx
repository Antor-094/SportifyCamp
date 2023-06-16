import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner = () => {
  const sliderRef = React.useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        <div className="relative h-[90vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/9cyG74d/pexels-photo-296301.jpg"
              alt="Image 2"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-bold mb-4 text-center">
              Learn new skills and make new friends
            </h3>
            <p className="text-lg text-center font-light mb-8">
              Join our summer camp and experience the thrill of competition
              while making new friends and learning new skills.
            </p>
            <Link
              to="/signup"
              className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div className="relative h-[90vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/kgSKQMT/72136312-H.jpg"
              alt="Image 2"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-bold text-center mb-4">
              Get fit and have fun
            </h3>
            <p className="text-lg text-center font-light mb-8">
              Our camp offers a range of sports that will help you get fit and
              have fun at the same time.
            </p>
            <Link
              to="/signup"
              className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div className="relative h-[90vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/zXwFRtJ/082616-childsports-THUMB-LARGE.webp"
              alt="Image 3"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-bold text-center mb-4">
              Experience the thrill of competition
            </h3>
            <p className="text-lg text-center font-light mb-8">
              Compete against other students and experience the thrill of
              competition while learning new skills and having fun.
            </p>
            <Link
              to="/signup"
              className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div className="relative h-[90vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/cNghdGL/free-photo-of-children-playing-football.jpg"
              alt="Image 3"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-bold text-center mb-4">
              Discover your passion for sports
            </h3>
            <p className="text-lg text-center font-light mb-8">
              Our summer camp is the perfect place to discover your passion for
              sports and develop your skills in a fun and supportive
              environment.
            </p>
            <Link
              to="/signup"
              className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div className="relative h-[90vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/3yrkWZn/pexels-photo-8813526.jpg"
              alt="Image 3"
            />
            <div className="absolute inset-0 bg opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-bold text-center mb-4">
              Experience the great outdoors
            </h3>
            <p className="text-lg text-center font-light mb-8">
              Our summer camp offers a range of outdoor activities that will
              help you connect with nature and experience the great outdoors.
            </p>
            <Link
              to="/signup"
              className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div className="relative h-[90vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/KV4fcXf/pexels-photo-1752502.jpg"
              alt="Image 3"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-bold text-center mb-4">
              Build confidence and self-esteem
            </h3>
            <p className="text-lg text-center font-light mb-8">
              Our summer camp is designed to help students build confidence and
              self-esteem through sports and outdoor activities.
            </p>
            <Link
              to="/signup"
              className="bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
            >
              Sign up now
            </Link>
          </div>
        </div>
      </Slider>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
        onClick={handlePrevClick}
      >
        <FaAngleLeft></FaAngleLeft>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-[#65799b] transition-colors duration-300"
        onClick={handleNextClick}
      >
        <FaAngleRight></FaAngleRight>
      </button>
    </div>
  );
};

export default Banner;
