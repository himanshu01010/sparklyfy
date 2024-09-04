import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logo.png'

const LandingPageSidebar = () => {
    return (
        <div className="w-80 bg-white text-base-content h-screen flex flex-col">
            <div className="p-4">
                <div className="flex items-center justify-center">
                    <img src={img} alt="Logo" className="w-25 h-25" />
                </div>
            </div>

            <ul className="menu p-4 flex-grow">
                <li>
                    <Link to='/Campaign/Create/Logo' className="flex items-center py-3 text-2xl rounded-md text-gray-400">
                        Logo
                    </Link>
                </li>
                <li>
                    <Link to='/Campaign/Create/Title' className="flex items-center py-3 text-2xl rounded-md text-gray-400">
                        Title
                    </Link>
                </li>
                <li>
                    <Link to='/Campaign/Create/Description' className="flex items-center py-3 text-2xl rounded-md text-gray-400">
                        Description
                    </Link>
                </li>
                <li>
                    <Link to='/Campaign/Create/Image' className="flex items-center py-3 text-2xl rounded-md text-gray-400">
                        Image
                    </Link>
                </li>
                <li>
                    <Link to='/Campaign/Create/Button' className="flex items-center py-3 text-2xl rounded-md text-gray-400">
                        Button
                    </Link>
                </li>
                <li>
                    <Link to='/Campaign/Create/Additional' className="flex items-center py-3 text-2xl rounded-md text-gray-400">
                        Additional Setting
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LandingPageSidebar;
