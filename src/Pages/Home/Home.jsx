import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSun, FaMoon } from 'react-icons/fa';
import Banner from './Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import ServicesDetails from './ServicesSection/ServicesDetails';
import PopularInstructors from './PopulerInstractors/PopularInstructors';
import Gallery from './Gallery/Gallery';
import './Home.css';

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`home-container ${themeClass}`}>
      <Helmet>
        <title>SportifyCamp | Home</title>
      </Helmet>
      
      <div className="lg:pt-20">
        <Banner />
        <button onClick={toggleTheme} className="theme-toggle-btn absolute 
        left-8 top-20 md:left-20 md:top-28 ml-auto">
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
      </div>
      <div className="my-12">
        <PopularClasses />
      </div>
      <div>
        <PopularInstructors />
      </div>
      <Gallery />
      <div>
        <ServicesDetails />
      </div>
    </div>
  );
};

export default Home;
