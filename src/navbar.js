import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, Flag } from "lucide-react";

const navItems = [
  { name: "Home", href: "." },
  {
    name: "Resources",
    submenu: [
      { name: "Curriculum", href: "curriculum" },
      { name: "Projects", href: "projects" },
      { name: "Documentation", href: "https://editor.netsblox.org/docs/" },
    ],
  },
  {
    name: "Tools",
    submenu: [
      { name: "PhoneIoT", href: "phoneiot" },
      { name: "RoboScape", href: "roboscape" },
      { name: "BeatBlox", href: "beatblox" },
      { name: "PyBlox", href: "pyblox" },
      { name: "Extensions", href: "https://extensions.netsblox.org/" },
    ],
  },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          <a href=".">
            <img src="images/logos/netsblox.svg" className="w-16 h-16 mr-1 inline-block"/>
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400" style={{ verticalAlign: "middle" }}>NetsBlox</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <div key={`nav-${item.name}`} className="relative" >
                <a href={item.href} onClick={item.submenu && (() => toggleSubmenu(i))} className="plain">
                  {item.name}
                  {item.submenu && (openSubmenu === i ? <ChevronUp className="mr-0"/> : <ChevronDown className="mr-0"/>)}
                </a>
                {item.submenu && openSubmenu === i && (
                  <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    {item.submenu.map(subItem => (
                      <a key={`nav-${item.name}-${subItem.name}`} href={subItem.href} className="plain block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg">
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="https://editor.netsblox.org" target="_blank"><button><Flag/>Create!</button></a>
          </div>
          <button
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 text-blue-500 dark:text-blue-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 mr-0"/> : <Menu className="w-6 h-6 mr-0"/>}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item, i) => (
              <div key={`nav-${item.name}`} className="relative">
                <a
                  href={item.href}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  onClick={item.submenu && (() => toggleSubmenu(i))}
                >
                  {item.name}
                  {item.submenu && (openSubmenu === i ? <ChevronUp className="mr-0"/> : <ChevronDown className="mr-0"/>)}
                </a>
                {item.submenu && openSubmenu === i && (
                  <div className="mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    {item.submenu.map((subItem) => (
                      <a
                        key={`nav-${item.name}-${subItem.name}`}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
