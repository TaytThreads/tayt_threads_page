/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  SearchIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CartIcon,
  UserIcon,
} from "../assets/icons/index";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        // TODO: search logic
        alert(
          `Searching for: ${searchQuery}. This functionality is not implemented yet.`
        );
        setSearchQuery("");
      }
    },
    [searchQuery]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDropdown();
      }
    },
    [closeDropdown]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, closeDropdown]);

  const navigationItems = [
    { label: "On Sale", href: "/sale", external: false },
    { label: "New Arrivals", href: "/new-arrivals", external: false },
    { label: "Brands", href: "/brands", external: false },
  ];

  // TODO: Replace with actual links
  const dropdownItems = [
    { label: "All Products", href: "/" },
    { label: "Men's Clothing", href: "/" },
    { label: "Women's Clothing", href: "/" },
    { label: "Accessories", href: "/" },
  ];

  return (
    <nav
      className="w-full h-16 md:h-20 flex items-center justify-between lg:justify-around px-2 bg-white text-black shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex-shrink-0">
        <a href="/" className="block">
          <h1 className="custom-heading text-2xl md:text-3xl font-bold hover:opacity-80 transition-opacity duration-200">
            TaytThreads.co
          </h1>
        </a>
      </div>

      <div className="hidden md:flex custom-paragraph">
        <ul className="flex items-center space-x-6 text-base font-medium">
          <li ref={dropdownRef} className="relative">
            <button
              className="flex items-center space-x-1 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              onClick={toggleDropdown}
              onKeyDown={handleKeyDown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-label="Shop menu"
            >
              <span>Shop</span>
              <img
                src={isDropdownOpen ? ChevronUpIcon : ChevronDownIcon}
                alt=""
                className="w-4 h-4 transition-transform duration-200"
                aria-hidden="true"
              />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50"
                role="menu"
                aria-label="Shop submenu"
              >
                <ul className="py-2">
                  {dropdownItems.map((item, _index) => (
                    <li key={item.href} role="none">
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                        role="menuitem"
                        tabIndex={isDropdownOpen ? 0 : -1}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="bg-gray-900 hover:bg-gray-800 transition-colors duration-200 px-4 py-2 rounded-full flex items-center gap-3 min-w-md">
              <button
                type="submit"
                className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Search"
              >
                <img
                  src={SearchIcon}
                  alt=""
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </button>
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="flex-1 text-sm bg-transparent border-none outline-none text-white placeholder-gray-400 focus:placeholder-gray-300"
                aria-label="Search for products"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Shopping cart"
          >
            <img src={CartIcon} alt="" className="w-5 h-5" aria-hidden="true" />
          </button>
          <Link
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="User account"
            to="/auth/login"
          >
            <img src={UserIcon} alt="" className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
