import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SideNavbar from './SideNavbar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="navbar bg-zinc-800">
        <div className="flex-1">

          {isMobile && (
            <button onClick={toggleSidebar} className="btn bg-zinc-700">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><Link to='/setting'>Settings</Link></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* SideNavbar */}
      <div className="flex">
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50 ${isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
            }`}
        >
          {isMobile && (
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 btn btn-ghost lg:hidden"
            >
              <X size={24} />
            </button>
          )}
          <SideNavbar isMobile={isMobile} closeSidebar={closeSidebar} />
        </div>

        {/* Main content area */}
        <div className={`flex-1 ${!isMobile ? 'ml-80' : ''}`}>
          {/* Your main content goes here */}
        </div>
      </div>

      {/* Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;