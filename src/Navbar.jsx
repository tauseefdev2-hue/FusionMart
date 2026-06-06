import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NAV_LINKS = [
  {
               id: 'men',
    label: 'MEN',
    submenu: ['T-Shirts', 'Shirts', 'Jeans', 'Sport Wear', 'Polos', 'Track Suits']
  },
          {
    id: 'women',
    label: 'WOMEN',
    submenu: ['Dresses', 'Western Wear', 'Jeans', 'Track Suits', 'Ethnic']
  },
  {
    id: 'kids',
    label: 'KIDS',
    submenu: ['Girls Western', 'Boys Western']
  },
  {
    id: 'accessories',
    label: 'ACCESSORIES',
    submenu: ['Watches', 'Fragrances', 'Caps', 'Bags']
  },
  {
    id: 'fragrances',
    label: 'FRAGRANCES',
    submenu: ['Men', 'Women']
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => prev === menu ? null : menu);
  };

  return (
              <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex-shrink-0">
          <p className="text-2xl font-black tracking-wide">
            <span className="text-gray-900">Fusion</span>
            <span className="text-blue-600">Mart</span>
          </p>
        </div>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <div key={link.id} className="relative py-4">
              <button 
                className={`flex gap-1 items-center font-medium text-sm ${
                  activeDropdown === link.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`} 
                onClick={() => toggleDropdown(link.id)}
              > 
                <span>{link.label}</span>
                {activeDropdown === link.id ? <FaAngleUp /> : <FaAngleDown />}
              </button>

              {/* Desktop Dropdown Panel */}
              {activeDropdown === link.id && (
                <ul className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-lg py-2 mt-1 z-50">
                  {link.submenu.map((subItem) => (
                    <li key={subItem}>
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
  <button className="text-gray-700 hover:text-blue-600 p-2">
    <FaSearch className="text-xl" />
  </button>
  
  <button className="text-gray-700 hover:text-blue-600 relative p-2">
    <IoMdCart className="text-2xl" />
  </button>
  
  {/* Add size classes that only apply on mobile */}
  <button 
    className="block md:hidden p-2 text-gray-900 hover:text-blue-600"
    style={{ minWidth: 'auto', minHeight: 'auto' }} // Override global CSS
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
  </button>
</div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white w-full px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => {
              const isDropdownOpen = activeDropdown === item.id;
              return (
                <li key={item.id} className="border-b border-gray-800 pb-2">
                         <button  
                    className="w-full flex items-center justify-between text-left font-medium py-2 hover:text-blue-400"
                    onClick={() => toggleDropdown(item.id)}
                  >
                         <span>{item.label}</span>
                    {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                      </button>

                  {/* Mobile Submenu */}
                  {isDropdownOpen && (
                    <ul className="pl-4 mt-1 flex flex-col gap-2 text-gray-400 text-sm">
                               {item.submenu.map((subItem) => (
                        <li key={subItem}>
                          <a 
                            href="#" 
                            className="hover:text-white block py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;