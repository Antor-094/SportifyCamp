
import { Link, useRouteError } from 'react-router-dom';
// import image404 from '../../src/assets/banner/oops-404-error-with-broken-robot-concept-illustration_114360-1932' 
const NotFound = () => {
    const { error, status } = useRouteError()
    return (
        <div className='text-center'>
            <img className='md:w-[400px] md:h-[400px] mx-auto' src="https://i.ibb.co/PN6jbgv/404page.png" alt="" />
            <div>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
               <Link to='/'><button className='bg-[#488b8f] font-bold text-white p-3 rounded-md'>GOT TO HOME PAGE</button></Link>
            </div>
        </div>
    );
};

export default NotFound;