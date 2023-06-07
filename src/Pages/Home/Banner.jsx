import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // increased speed for smoother transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // increased autoplay speed for longer display time
    arrows: false,
    pauseOnHover: false, // changed to pause on hover for better user experience
    fade: true, // added fade effect for smoother transitions
    cssEase: 'linear', // added linear easing for smoother transitions
  };

  return (
    <Slider {...settings}>
      <div className='relative h-[90vh]'>
        <div className='absolute inset-0'>
          <img className='w-full h-full object-cover' src="https://i.ibb.co/9cyG74d/pexels-photo-296301.jpg" alt="Image 2" />
          <div className='absolute inset-0 bg-black opacity-50'></div> {/* added background overlay */}
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <h3 className='text-4xl font-bold mb-4'>Learn new skills and make new friends</h3>
          <p className='text-lg text-center font-light mb-8'>Join our summer camp and experience the thrill of competition while making new friends and learning new skills.</p>
          <a href='#' className='bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300'>Sign up now</a>
        </div>
      </div>
      <div className='relative h-[90vh]'>
        <div className='absolute inset-0'>
          <img className='w-full h-full object-cover' src="https://i.ibb.co/kgSKQMT/72136312-H.jpg" alt="Image 2" />
          <div className='absolute inset-0 bg-black opacity-50'></div> {/* added background overlay */}
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <h3 className='text-4xl font-bold mb-4'>Get fit and have fun</h3>
          <p className='text-lg text-center font-light mb-8'>Our camp offers a range of sports that will help you get fit and have fun at the same time.</p>
          <a href='#' className='bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300'>Sign up now</a>
        </div>
      </div>
      <div className='relative h-[90vh]'>
        <div className='absolute inset-0'>
          <img className='w-full h-full object-cover' src="https://i.ibb.co/zXwFRtJ/082616-childsports-THUMB-LARGE.webp" alt="Image 3" />
          <div className='absolute inset-0 bg-black opacity-50'></div> {/* added background overlay */}
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <h3 className='text-4xl font-bold mb-4'>Experience the thrill of competition</h3>
          <p className='text-lg text-center font-light mb-8'>Compete against other students and experience the thrill of competition while learning new skills and having fun.</p>
          <a href='#' className='bg-white text-black py-2 px-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300'>Sign up now</a>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
