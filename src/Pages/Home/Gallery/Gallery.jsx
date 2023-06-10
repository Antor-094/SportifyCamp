// import React from 'react';
// import GalleryImg from "./GalleryImg";

import GalleryImg from "./GalleryImg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out",
      delay: 300, 
      offset: 120
    });
  }, []);
  const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/Hr25G56/maxtalent.jpg',
      alt: 'Cricket',
      name: 'Cricket',
      description: 'Experience the thrill of cricket and master your skills. Join our program to showcase exciting matches and training sessions.',
    },
    {
      id: 2,
      src: 'https://i.ibb.co/Ny2Kr5J/kids-Playing-Soccer-Summer-Camp-i-Stock.jpg',
      alt: 'Football',
      name: 'Football',
      description: 'Kick, dribble, and score goals in our action-packed football program. Take your skills to the next level.',
    },
    {
      id: 3,
      src: 'https://i.ibb.co/1LLwJhX/bollyboll.jpg',
      alt: 'Volleyball',
      name: 'Volleyball',
      description: 'Bump, set, and spike your way through our thrilling volleyball program. Experience a dynamic and competitive environment.',
    },
    {
      id: 4,
      src: 'https://i.ibb.co/F3PXyKf/tenis.jpg',
      alt: 'Tennis',
      name: 'Tennis',
      description: 'Discover the elegance and precision of tennis in our lessons. Improve your game and enjoy the sport.',
    },
    {
      id: 5,
      src: 'https://i.ibb.co/VvQ3T0L/08indonesia-badminton-promo-super-Jumbo.jpg',
      alt: 'Badminton',
      name: 'Badminton',
      description: 'Get ready to smash and drop shots with our exciting badminton sessions. Learn, grow, and showcase your skills.',
    },
    {
      id: 6,
      src: 'https://i.ibb.co/1dtCyBg/istockphoto-998671162-612x612.jpg',
      alt: 'Chess',
      name: 'Chess',
      description: 'Sharpen your mind and strategize your moves with our chess lessons. Enhance critical thinking and analytical skills.',
    },
    {
      id: 7,
      src: 'https://i.ibb.co/8Y3r4mZ/kids-playing-basketball.jpg',
      alt: 'Basketball',
      name: 'Basketball',
      description: 'Dribble, shoot, and score in our exciting basketball program. Showcase your talent and teamwork.',
    },
    {
      id: 8,
      src: 'https://i.ibb.co/R6mmh5V/Bored-Cross-Ice1.jpg',
      alt: 'Hockey',
      name: 'Hockey',
      description: 'Experience the intensity and teamwork of hockey in our thrilling program. Learn the skills and strategies to excel on the field.',
    },
    {
      id: 9,
      src: 'https://i.ibb.co/ZGbY9Qm/baseball-top.jpg',
      alt: 'Baseball',
      name: 'Baseball',
      description: 'Step up to the plate and swing for the fences in our exciting baseball program. Develop your skills and enjoy the thrill of the game.',
    },
  ]

  

  return (
    <div className="container w-[90%] md:w-[70%]  mx-auto my-12 p-2  border-gray-300 shadow-lg">
 <SectionTitle heading={'Gallery'} subHeading='WATCH OUR SUMMER EVENTS'></SectionTitle>
  <div data-aos="zoom-in-up" className="grid grid-cols-1 md:grid-cols-3 gap-3">
    {images.map(image => {
      return <GalleryImg key={image.id} image={image} />;
    })}
  </div>
</div>


  );
};

export default Gallery;
