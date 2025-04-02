import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronDown, ChevronUp, Flag } from "lucide-react";

const flagColor = "#28b52a";

const navItems = [
  { name: "Home", href: "." },
  {
    name: "Resources",
    submenu: [
      { name: "Curriculum", href: "curriculum" },
      { name: "Projects", href: "projects" },
      { name: "Multiplayer", href: "multiplayer" },
      { name: "Documentation", href: "https://editor.netsblox.org/docs/" },
      { name: "Learn More", href: "learn" },
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

const SHOW_THEME_TOGGLE = false;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <a href=".">
            <img src="images/netsblox-logo-bluetransp.png" alt="NetsBlox" style={{ height: "50px", paddingRight: "6px", display: "inline-block" }} />
            <div href="." className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600" style={{ marginRight: "auto", display: "inline-block", verticalAlign: "middle" }}>
              NetsBlox
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative" style={item.submenu ? {cursor: "pointer"} : {}} >
                <a
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  style={{ userSelect: "none" }}
                  onClick={
                    item.submenu
                      ? (e) => {
                          e.preventDefault();
                          handleSubmenuToggle(index);
                        }
                      : null
                  }
                >
                  {item.name}
                  {item.submenu && (openSubmenu === index ?
                    <ChevronUp style={{ display: "inline" }} className="inline ml-1 display:inline"/> :
                    <ChevronDown style={{ display: "inline" }} className="inline ml-1 display:inline"/>
                  )}
                </a>
                {item.submenu && openSubmenu === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors rounded-lg"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="https://editor.netsblox.org">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-sm hover:shadow-xl rounded-full py-1 px-4">
                <Flag stroke={flagColor} fill={flagColor} className="w-8 h-8 inline-block" style={{filter: "drop-shadow(0px 0px 4px rgb(0 0 0 / 0.5))"}}></Flag>
                <span className="inline-block text-white font-semibold ml-1">Create!</span>
              </div>
            </a>
            {SHOW_THEME_TOGGLE ? <button
              onClick={() => {
                localStorage.setItem("darkMode", !darkMode);
                setDarkMode(!darkMode);
              }}
              className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 text-blue-500 dark:text-blue-400 transition-colors"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button> : null}
          </div>
          <button
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 text-blue-500 dark:text-blue-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                <a
                  href={item.href}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  style={{ userSelect: "none" }}
                  onClick={
                    item.submenu
                      ? (e) => {
                          e.preventDefault();
                          handleSubmenuToggle(index);
                        }
                      : null
                  }
                >
                  {item.name}
                  {item.submenu && (openSubmenu === index ?
                    <ChevronUp className="inline ml-1" /> :
                    <ChevronDown className="inline ml-1" />
                  )}
                </a>
                {item.submenu && openSubmenu === index && (
                  <div className="mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
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
            {SHOW_THEME_TOGGLE ? <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button> : null}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
