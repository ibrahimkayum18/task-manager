import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
    .then(() => {
        toast.success('Log Out Successful')
    })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navlinks = (
    <>
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
      <Link to="/dashboard/projects" className="text-white hover:text-gray-300">
        Dashboard
      </Link>
      <Link to="/about" className="text-white hover:text-gray-300">
        About Us
      </Link>
      <Link to="/contact" className="text-white hover:text-gray-300">
        Contact Us
      </Link>
      {!user ? (
        <Link to="/login" className="text-white hover:text-gray-300">
          Log In
        </Link>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" >
            <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user.displayName}</a>
            </li>
            <li onClick={handleLogOut}>
              <a>Log Out</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-xl font-bold flex gap-3 items-center"
        >
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co/nwt5mjc/logo.png"
            alt=""
          />
          <span className="text-3xl">Task Manager</span>
        </Link>

        {/* Navigation links */}
        <div className="lg:flex items-center">
          {/* Horizontal menu for larger screens */}
          <div className="hidden lg:flex items-center space-x-4">
            {navlinks}
          </div>

          {/* Mobile menu button and dropdown for smaller screens */}
          <div className="lg:hidden relative">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <div
              className={`absolute px-14 space-y-1 flex flex-col top-0 right-0 mt-12 bg-gray-800 p-2 rounded-md shadow-lg ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              {navlinks}
            </div>
          </div>
        </div>

        {/* Shopping cart icon and link */}
      </div>
    </nav>
  );
};

export default NavBar;
