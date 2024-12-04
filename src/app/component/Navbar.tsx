"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaCamera, FaSearch } from "react-icons/fa";

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // Search term state
    const dropdownRef = useRef(null); // Ref for the dropdown

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // Sample category data
    const category = [
        { id: 1, name: "Electronics", description: "Gadgets and devices" },
        { id: 2, name: "Groceries", description: "Food and daily essentials" },
        { id: 3, name: "Clothing", description: "Apparel and accessories" },
        { id: 4, name: "Furniture", description: "Home and office furniture" },
        { id: 5, name: "Books", description: "Literature and study material" },
        { id: 6, name: "Toys", description: "Toys and games" },
    ];

    const product = [
        { id: 1, name: "ABC" },
        { id: 2, name: "Gasber" },
        { id: 3, name: "Cambodia" },
        { id: 4, name: "Furniture" },
        { id: 5, name: "Books" },
        { id: 6, name: "Game" },
    ];

    // Filter products based on the search term
    const filteredProducts = product.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (

        <div>
            <div className="bg-white dark:bg-gray-900 xl:fixed  xl:w-full w-[1160px]  mx-auto z-20 top-0 shadow">
                <nav className="w-full">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3 space-x-10">
                        <div className="flex space-x-4 items-center">
                            <a href="/" className="flex items-center space-x-3">
                                <img
                                    src="https://www.khmer24.com/icon/khmer24.png"
                                    className="h-10"
                                    alt="Logo"
                                />
                            </a>
                            <img className="h-6" src="https://www.khmer24.com/icon/km-40x40.png" alt="" />
                        </div>
                        {/* Dropdown & Search (Responsive) */}
                        <div className="flex flex-1 items-center">
                            {/* Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={toggleDropdown}
                                    className="border whitespace-nowrap px-4 py-2 text-sm bg-white hover:bg-gray-100 flex items-center"
                                >
                                    ផលិតផលទាំងអស់
                                    <svg
                                        className={`ml-2 h-4 w-4 transform transition-transform ${dropdownOpen ? "rotate-180" : ""
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute z-10 mt-2 w-[200px] bg-white border rounded-lg shadow-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            {category.map((item) => (
                                                <li key={item.id} className="hover:bg-gray-100">
                                                    <a href="#" className="block px-4 py-2">
                                                        <div className="font-semibold">{item.name}</div>
                                                        <div className="text-xs text-gray-500">
                                                            {item.description}
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Search */}
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    className=" border whitespace-nowrap px-4 py-2 outline-none bg-gray-50 focus:border-blue-500 text-sm w-full"
                                    placeholder="តើអ្នកកំពុងស្វែរកផលិតផលអ្វី?"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <FaSearch className="absolute right-3 top-3 text-gray-500 text-lg" />
                                {searchTerm && (
                                    <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                        {filteredProducts.length > 0 ? (
                                            <ul className="py-2 text-sm text-gray-700">
                                                {filteredProducts.map((item) => (
                                                    <li
                                                        key={item.id}
                                                        className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    >
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="py-2 px-4 text-gray-500 text-sm">
                                                មិនមានផលិតផលទេ!
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-blue-800">
                                ចូលគណនី
                            </a>
                            <span className="text-gray-400">ឬ</span>
                            <a href="#" className="text-blue-800">
                                ចុះឈ្មោះ
                            </a>
                            <button className="flex px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg items-center space-x-2">
                                <FaCamera />
                                <span>ដាក់លក់</span>
                            </button>
                        </div>
                    </div>
                </nav>
             
            </div>

            <div className="flex items-center justify-end right-0 h-screen w-full fixed">
                <button className="bg-blue-400 py-1 px-3 text-white rotate-90 rounded-br-lg text-sm rounded-bl-lg">Feedback</button>
            </div>

        </div>

    );
}

export default Navbar;
