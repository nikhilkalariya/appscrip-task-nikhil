import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <>
            <nav className="bg-black flex justify-center lg:justify-between px-14 py-2">
                <div className="flex  gap-4">
                    <img src="/assets/lorem.svg" alt="" />
                    <span className="text-red-600">Lorem ipsum dolor </span>
                </div>
                <div className="hidden lg:flex gap-4">
                    <img src="/assets/lorem.svg" alt="" />
                    <span className="text-red-600">Lorem ipsum dolor </span>
                </div>
                <div className="hidden lg:flex gap-4">
                    <img src="/assets/lorem.svg" alt="" />
                    <span className="text-red-600">Lorem ipsum dolor </span>
                </div>
            </nav>
            <header className="bg-white shadow pb-4">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <img className="" src="/assets/Logo.svg" />

                        <Link
                            className="text-center text-2xl font-bold "
                            href="/"
                        >
                            LOGO
                        </Link>

                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-gray-600 text-base font-bold hover:text-gray-900"
                            >
                                <img src="/assets/search-normal.svg" />
                            </Link>
                            <Link
                                href="/cart"
                                className="text-gray-600 text-base font-bold hover:text-gray-900"
                            >
                                <img src="/assets/heart.svg" />
                            </Link>
                            <Link
                                href="/cart"
                                className="text-gray-600 text-base font-bold hover:text-gray-900"
                            >
                                <img src="/assets/shopping-bag.svg" />
                            </Link>
                            <div className="hidden lg:flex">
                            <Link
                                href="/cart"
                                className="text-gray-600 text-base font-bold hover:text-gray-900"
                            >
                                <img src="/assets/profile.svg" />
                            </Link>
                            <select>
                                <option className="text-base font-bold">
                                    EnG
                                </option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="hidden lg:flex justify-center space-x-20">
                    <Link
                        href="/shop"
                        className="text-gray-600 text-base font-bold hover:text-gray-900"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/skills"
                        className="text-gray-600 text-base font-bold hover:text-gray-900"
                    >
                        Skills
                    </Link>
                    <Link
                        href="/stories"
                        className="text-gray-600 text-base font-bold hover:text-gray-900"
                    >
                        Stories
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-600 text-base font-bold hover:text-gray-900"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-600 text-base font-bold hover:text-gray-900"
                    >
                        Contact Us
                    </Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
