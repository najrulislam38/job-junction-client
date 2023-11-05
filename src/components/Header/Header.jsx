import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      {location?.pathname !== "/" ? (
        <div>
          <Navbar></Navbar>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      )}
    </div>
  );
};

export default Header;
