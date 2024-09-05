import React from 'react';
import { Home, Flag, Gift, Wallet, Settings } from 'lucide-react';
import img from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import LandingPageSidebar from './LandingPageSidebar';

const SideNavbar = () => {
  const location = useLocation();
  const sidebar = localStorage.getItem('landingPage');

  if (sidebar === 'true') {
    return <LandingPageSidebar />;
  }

  // Function to check if the path starts with the given path
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="w-80 bg-white text-base-content min-h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <img src={img} alt="Logo" className="w-25 h-25" />
        </div>
      </div>

      <ul className="menu p-4 flex-grow">
        <li>
          <Link
            to='/Home'
            className={`flex items-center py-3 text-2xl rounded-md ${
              isActive('/Home') ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            <Home className="w-5 h-5 mr-2" /> Home
          </Link>
        </li>
        <li>
          <Link
            to='/Campaign'
            className={`flex items-center py-3 text-2xl rounded-md ${
              isActive('/Campaign') ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            <Flag className="w-5 h-5 mr-2" /> Campaign
          </Link>
        </li>
        <li>
          <Link
            to='/Reward'
            className={`flex items-center py-3 text-2xl rounded-md ${
              isActive('/Reward') ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            <Gift className="w-5 h-5 mr-2" /> Reward Link
          </Link>
        </li>
        <li>
          <Link
            to='/Wallet'
            className={`flex items-center py-3 text-2xl rounded-md ${
              isActive('/Wallet') ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            <Wallet className="w-5 h-5 mr-2" /> Wallet
          </Link>
        </li>
        {/* <li>
          <Link
            to='/Setting'
            className={`flex items-center py-3 text-2xl rounded-md ${
              isActive('/Setting') ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            <Settings className="w-5 h-5 mr-2" /> Setting
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SideNavbar;
