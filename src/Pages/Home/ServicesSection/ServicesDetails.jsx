

const ServicesDetails = () => {
  return (
    <div className="hero lg:w-[80%] mx-auto my-10">
      <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse bg-[#FFFFFF] rounded-lg shadow-lg lg:px-20">
        <img
          src="https://i.ibb.co/1dtCyBg/istockphoto-998671162-612x612.jpg"
          className="lg:w-[490px] w-full"
          alt="Sportify Camp"
        />
        <div>
          <p className="text-[#1F2937] text-xl font-semibold mb-3">
            DISCOVER OUR SERVICES
          </p>
          <h1 className="lg:text-3xl text-2xl font-bold text-[#0D0D0D] mb-7">
            Welcome to Sportify Camp!
          </h1>
          <p className="text-[#1F2937] mb-7">
            Join our exciting summer camp programs and embark on a journey of sports discovery and fun. Our camps are designed to introduce students to a variety of sports, foster teamwork and sportsmanship, and create memorable experiences. Get ready for a summer filled with sports, adventure, and new friendships!
          </p>
          <button className="btn-main hover:bg-[#555273] bg-[#1F2937] px-4 py-2 rounded text-white font-bold">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
