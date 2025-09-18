import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, Flag } from "lucide-react";

const dropdownClasses = "plain block px-4 py-2 hover:bg-blue-100 rounded-lg";

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
  {
    name: "Policies",
    submenu: [
      { name: "Privacy", href: "privacy" },
      { name: "Terms", href: "terms" },
    ],
  },
];

export default () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (i) => {
    setOpenSubmenu(openSubmenu === i ? null : i);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            <a href="." style={{ textDecorationLine: "none" }}>
              <img
                src="images/logos/netsblox.svg"
                className="w-16 h-16 mr-1 inline-block"
              />
              <span
                className="text-3xl font-bold text-blue-600"
                style={{ verticalAlign: "middle" }}
              >
                NetsBlox
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, i) => (
                <div key={`nav-${item.name}`} className="relative">
                  <a
                    href={item.href}
                    onClick={() => toggleSubmenu(i)}
                    className="plain"
                  >
                    {item.name}
                    {item.submenu &&
                      (openSubmenu === i ? (
                        <ChevronUp className="mr-0" />
                      ) : (
                        <ChevronDown className="mr-0" />
                      ))}
                  </a>
                  {item.submenu && openSubmenu === i && (
                    <div className="absolute mt-2 bg-white shadow-lg rounded-lg">
                      {item.submenu.map((subItem) => (
                        <a
                          key={`nav-${item.name}-${subItem.name}`}
                          href={subItem.href}
                          className={dropdownClasses}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="https://editor.netsblox.org" target="_blank">
                <button>
                  <Flag />
                  Create!
                </button>
              </a>
            </div>
            <button
              className="md:hidden p-2 rounded-full"
              onClick={() => {
                setOpenSubmenu(null);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 mr-0" />
              ) : (
                <Menu className="w-6 h-6 mr-0" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              {navItems.map((item, i) => (
                <div key={`nav-${item.name}`}>
                  <a
                    href={item.href}
                    onClick={() => toggleSubmenu(i)}
                    className={dropdownClasses}
                  >
                    {item.name}
                    {item.submenu &&
                      (openSubmenu === i ? (
                        <ChevronUp className="mr-0" />
                      ) : (
                        <ChevronDown className="mr-0" />
                      ))}
                  </a>
                  {item.submenu && openSubmenu === i && (
                    <div className="ml-4">
                      {item.submenu.map((subItem) => (
                        <a
                          key={`nav-${item.name}-${subItem.name}`}
                          href={subItem.href}
                          className={dropdownClasses}
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

      {(mobileMenuOpen || openSubmenu) && (
        <div
          className="fixed top-0 left-0 w-screen h-screen"
          style={{ zIndex: 49 }}
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            setOpenSubmenu(false);
          }}
        />
      )}
    </>
  );
};
