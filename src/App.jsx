import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import useAuth from "./Hooks/useAuth";


const App = () => {
  const {user}=useAuth()
  return (
    <>
      <div className="mx-auto container">
        <Navbar
          loggedIn={user}
          userProfilePicture={
            user?.photoURL
          }
        />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;