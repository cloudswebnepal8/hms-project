import React, { useState } from 'react';
import logo from "../../assets/images/logo.svg";
import { Navlinks } from '../../Links/Navlinks';
import { Link, useLocation } from 'react-router-dom'; 

const Navbar: React.FC = () => {
    const location = useLocation();
    // 1. Manage State for Mobile Drawer Toggle Control
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="sticky top-0 z-50 bg-white px-4 sm:px-[10%] shadow-sm">
            <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-1 border-b border-gray-200">
                
                <Link to="/">
                    <img src={logo} alt="Prescripto Logo" className='w-36 sm:w-40 cursor-pointer' />
                </Link>

                <ul className="hidden md:flex gap-6 items-center list-none p-0 m-0">
                    {Navlinks.map((items) => {
                        const isActive = location.pathname === items.link || (items.link !== '/' && location.pathname.startsWith(items.link));
                        const isAdminBtn = items.id === 5;

                        return (
                            <li
                                key={items.id}
                                className={`cursor-pointer transition-all ${items.color || 'py-1'}`}
                            >
                                <Link
                                    to={items.link}
                                    target={items.isExternal ? "_blank" : "_self"}
                                    rel={items.isExternal ? "noopener noreferrer" : undefined}
                                    className={`block no-underline text-sm font-medium ${
                                        isAdminBtn ? 'text-white' : 'text-gray-700 hover:text-black'
                                    }`}
                                >
                                    {items.name}
                                </Link>
                                {isActive && !isAdminBtn && (
                                    <hr className="border-blue-600 w-4/5 border-t-2 m-auto mt-0.5 rounded" />
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden md:block">
                    <Link to="/Account">
                        <button className="bg-primary text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-opacity-90 transition-all cursor-pointer shadow-sm">
                            Create account
                        </button>
                    </Link>
                </div>

                <button 
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden text-gray-600 hover:text-black focus:outline-none p-2 cursor-pointer z-50"
                    aria-label="Toggle Navigation Menu"
                >
                    {isMenuOpen ? (
                        /* Close icon SVG */
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        /* Hamburger icon SVG */
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            <div className={`md:hidden fixed inset-x-0 top-[73px] bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
                isMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible h-0"
            }`}>
                <div className="px-6 py-6 flex flex-col gap-4">
                    <ul className="flex flex-col gap-4 list-none p-0 m-0">
                        {Navlinks.map((items) => {
                            const isActive = location.pathname === items.link || (items.link !== '/' && location.pathname.startsWith(items.link));
                            
                            return (
                                <li key={items.id} className="w-full">
                                    <Link
                                        onClick={() => setIsMenuOpen(false)} // Auto-collapse menu on link selection
                                        to={items.link}
                                        target={items.isExternal ? "_blank" : "_self"}
                                        rel={items.isExternal ? "noopener noreferrer" : undefined}
                                        className={`block py-2 text-base font-medium border-b border-gray-50 rounded px-2 transition-colors ${
                                            isActive ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                                        }`}
                                    >
                                        {items.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    
                    <div className="pt-2">
                        <Link to="/Account" onClick={() => setIsMenuOpen(false)}>
                            <button className="w-full bg-primary text-white text-base font-medium py-2.5 rounded-lg shadow-sm">
                                Create account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;