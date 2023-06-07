import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";


const App = () => {
  return (
    <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  );
};

export default App;