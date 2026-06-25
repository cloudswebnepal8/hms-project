import logo from "../../assets/images/logo.svg";
import { Navlinks } from '../../Links/Navlinks';
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
    const location = useLocation(); //this function track the location of the link

    return (
        <div className="sticky top-0 z-50 bg-white px-4 sm:px-[10%]">
            <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-1 border-b border-gray-400">
                <div>
                    <img src={logo} alt="Prescripto Logo" className='w-40 cursor-pointer' />
                </div>
                <ul className="flex gap-6 items-center list-none p-0 m-0 ">
                    {Navlinks.map((items) => {
                        //tis code  mattch against location.pathname instead of activeId state
                        const isActive = location.pathname === items.link || (items.link !== '/' && location.pathname.startsWith(items.link));
                        const isAdminBtn = items.id === 5;

                        return (
                            <li
                                key={items.id}
                                className={`cursor-pointer transition-all ${items.color ||'py-1'}`}
                            >
                                {/*if used liink instead of a it wiilnot reload the page agaain and again */}
                                <Link
                                    to={items.link}
                                    className={`block no-underline text-sm font-medium ${
                                        isAdminBtn ? 'text-white' : 'text-black'
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

                <a href="/Account">
                    <button className="bg-primary text-white text-s font-normal px-4 py-1 rounded-full hidden md:block cursor-pointer">
                    Login
                </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;