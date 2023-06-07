
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-52">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">About SportifyCamp</h3>
          <p className="text-gray-400 leading-loose">
            SportifyCamp is a summer camp website where students can learn about various sports and activities. Our experienced coaches and instructors provide a fun and safe environment for kids to develop their skills and make new friends.
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 leading-loose">
            123 Main Street<br />
            Anytown, USA 12345<br />
            (555) 555-5555<br />
            info@sportifycamp.com
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex">
            <a href="#" className="mr-4"><FaFacebook /></a>
            <a href="#" className="mr-4"><FaTwitter /></a>
            <a href="#" className="mr-4"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-400">&copy; 2023 SportifyCamp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
