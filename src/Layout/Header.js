import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { FaWindowClose } from "react-icons/fa";
import { motion } from 'framer-motion';


const Header = () => {
  const [auth, setAuth] = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  //added
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  //logout
  const HandleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (
    <motion.div className={isScrolled ? 'scrolled' : ''}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <nav className= " bg-gray-800 text-white py-4 px-6 flex justify-between items-center fixed w-full top-0 z-10">
      {/* Logo */}
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-8 mr-4" /> */}
        <span className="font-semibold text-lg">Your Logo</span>
      </div>
      {/* Menu toggle button */}
      <div className="lg:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={handleMenuToggle}
        >
          {menuOpen ? (
            <FaWindowClose className="text-3xl absolute top-0 right-0 m-1 p-1" />
          ) : (
            //  <div className='m-2 p-1 float-left top-0 fixed text-red-800'>X</div>
            <svg
              className="text-red-900 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Links */}
      <div
        className={`lg:flex lg:items-center ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="lg:flex-grow">
          <NavLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/user"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            onClick={() => setMenuOpen(false)}
          >
            User
          </NavLink>
          <NavLink
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </div>
        <div className="mt-4 lg:mt-0">
          {!auth.user ? (
            <>
              <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                <button className="btn m-1 btn-primary">Sign Up</button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                <button className="btn btn-ghost" onClick={HandleLogout}>
                  LogOut
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
    </motion.div>

    //   <div className="navbar  bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost btn-circle">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    //       </label>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //         <li><NavLink to='/'>HomePage</NavLink ></li>
    //         <li><NavLink to='/dashboard/user'>User</NavLink ></li>
    //         <li><NavLink to='/about'>About</NavLink ></li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navbar-center">
    //     <NavLink  className="btn btn-ghost text-xl">Share Wave</NavLink >
    //   </div>
    //   <div className="navbar-end">
    //     { !auth.user ?(
    //     <>
    //         <NavLink to='/register'>
    //     <button className="btn btn-ghost"> Sign Up
    //     </button>
    //     </NavLink>
    //     </>) :(<>

    //       <NavLink to='/register'>
    //     <button className="btn btn-ghost" to='/login'  onClick={HandleLogout}> LogOut
    //     </button>
    //     </NavLink>
    //     </>)

    //     }

    //     <button className="btn btn-ghost btn-circle">
    //       <div className="indicator">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    //         <span className="badge badge-xs badge-primary indicator-item"></span>
    //       </div>
    //     </button>
    //   </div>
    // </div>
  );
};

export default Header;
