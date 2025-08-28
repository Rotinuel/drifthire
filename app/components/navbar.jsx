"use client";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaSearch, FaTools, FaUsers } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { MdHowToReg } from "react-icons/md";

const Navbar = () => {
  const navList = [
    { name: "Find Work", href: "#" },
    { name: "Find Worker", href: "#" },
    { name: "Services", href: "#" },
    { name: "Skills Tests", href: "#" },
    { name: "Blog", href: "#" },
    {
      name: "More Info",
      groupOnly: true,
      children: [
        { name: "About us", href: "#a", icon: <FaUsers /> },
        { name: "How to hire", href: "#b", icon: <MdHowToReg /> },
        { name: "How to find work", href: "#c", icon: <FaSearch /> },
        { name: "Job Skills Center", href: "#d", icon: <FaTools /> },
        { name: "Skills Test Guide", href: "#e", icon: <GiSkills /> },
        { name: "FAQ", href: "#f", icon: <AiOutlineQuestionCircle /> },
      ],
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => setMenuOpen(!menuOpen);
  const handleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed w-full h-16 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center w-full h-full px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={Logo}
            alt="logo"
            width={180}
            height={180}
            className="cursor-pointer w-40 h-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 text-base font-semibold">
          {navList.map((item) =>
            !item.groupOnly ? (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleDropdown}
                >
                  <span>{item.name}</span>
                  <FiChevronDown
                    className={`ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''
                      }`}
                  />
                </div>
                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-2xl p-2 flex flex-col z-10 hover:bg-black">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 border-l-2 border-transparent hover:border-[#439fe4] hover:bg-sky-700 transition-all rounded"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span>{child.icon}</span>
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Right Side - Apply Button and Mobile Icon */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg bg-[#439fe4] text-white font-bold">
            Apply
          </button>
          <div onClick={handleNav} className="lg:hidden cursor-pointer">
            {menuOpen ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[65%] md:w-[40%] h-screen bg-[#ecf0f3] p-6 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-50`}
      >

        <Image
          src={Logo}
          alt="logo"
          width={90}
          height={90}
          className="cursor-pointer w-40 left-0"
          priority
        />

        <div className="flex flex-col mt-1 font-semibold text-gray-700">
          {navList
            .filter((item) => !item.groupOnly)
            .map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNav}
                className="py-3 border-b border-gray-300 hover:text-[#439fe4]"
              >
                {item.name}
              </Link>
            ))}

          {navList
            .find((item) => item.groupOnly)
            ?.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={handleNav}
                className="flex items-center gap-2 py-3 border-b border-gray-300"
              >
                <span>{child.name}</span>
              </Link>
            ))}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

