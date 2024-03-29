import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
    return (
      <>
        <div className="bg-cyan-950">
          <div className="flex items-center justify-between max-w-7xl p-4 mx-auto text-white">
          <Link to={'/'}>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="medical-logo" className="w-8 h-8" />
              <h2 className="text-lg font-semibold">edClinic</h2>
            </div>
            </Link>
            <ul className="hidden md:flex items-center gap-5 relative right-48">
                <Link to={'/'}>
                <li>Home</li>
                </Link>
                <Link to={'/department'}>
                <li>Departments</li>
                </Link>
                <Link to={'/doctor'}>
                <li>Doctors</li>
                </Link>
                <Link to={'/about'}>
                <li>About Us</li>
                </Link>
                <Link to={'/contact'}>
                <li>Contact Us</li>
                </Link>
                <Link to={'/blog'}>
                <li>Blogs</li>
                </Link>
                <Link to={'/booking'}>
                <li>Bookings</li>
                </Link>
                <Link to={'/favourite'}>
                <li>Favourites</li>
                </Link>
                <Link to={'/profile'}>
                {currentUser ? (
               <img src={currentUser.avatar} alt="profile" className=" w-10 h-10 rounded-full object-cover relative left-40"/>
                ):
                <li className=" relative left-40">Sign in</li> 
              }
            </Link>  
            </ul>
          </div>
        </div>
      </>
    );
  }
  