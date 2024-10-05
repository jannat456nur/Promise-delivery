
import { NavLink } from 'react-router-dom';
import { Moon, ChevronDown, UserRound } from 'lucide-react';
import promise from "../images/promise.png";
import { useState } from 'react';

export default function Header() {
    const [isNewDeliveryOpen, setIsNewDeliveryOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={promise} alt="Promise Delivery Limited" className="h-10" />

                    {/* Navigation links */}
                    <nav className="ml-10 flex space-x-4">
                        {/* Dashboard link */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-gray-900 font-medium border-b-4 border-red-500 pb-2" : "text-gray-500 hover:text-gray-900"
                            }
                        >
                            Dashboard
                        </NavLink>

                        {/* Deliveries link */}
                        <NavLink
                            to="/deliveries"
                            className={({ isActive }) =>
                                isActive ? "text-gray-900 font-medium border-b-4 border-red-500 pb-2" : "text-gray-500 hover:text-gray-900"
                            }
                        >
                            Deliveries
                        </NavLink>

                        {/* Invoices link */}
                        <NavLink
                            to="/invoices"
                            className={({ isActive }) =>
                                isActive ? "text-gray-900 font-medium border-b-4 border-red-500 pb-2" : "text-gray-500 hover:text-gray-900"
                            }
                        >
                            Invoices
                        </NavLink>

                        {/* Store link */}
                        <NavLink
                            to="/store"
                            className={({ isActive }) =>
                                isActive ? "text-gray-900 font-medium border-b-4 border-red-500 pb-2" : "text-gray-500 hover:text-gray-900"
                            }
                        >
                            Store
                        </NavLink>
                    </nav>
                </div>

                <div className="flex items-center">
                    {/* New Delivery Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsNewDeliveryOpen(!isNewDeliveryOpen)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-4 flex items-center"
                        >
                            New Delivery
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </button>

                        {/* Dropdown content for New Delivery */}
                        {isNewDeliveryOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                <NavLink to="/create-single-delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Create Single Delivery
                                </NavLink>
                                <NavLink to="/create-bulk-delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Create Bulk Delivery
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Theme Toggle Button */}
                    <button className="bg-gray-300 rounded-full p-2 text-black-500 hover:bg-white mr-4">
                        <Moon className="h-5 w-5" />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center focus:outline-none"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-white to-green-500 text-white hover:from-green-300 hover:to-green-600">
                                <UserRound className="h-5 w-5" />
                            </div>

                            <span className="ml-2 text-sm font-medium text-gray-700">Dilouar Hos</span>
                            <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                        </button>

                        {/* Dropdown content for Profile */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Your Profile
                                </NavLink>
                                <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Settings
                                </NavLink>
                                <NavLink to="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Sign out
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
