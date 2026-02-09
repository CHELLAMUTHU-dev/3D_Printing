"use client";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dropdowns = [
    {
      id: "dropdown-1",
      label: "Industries & Applications",
      heading1: "Industries",
      heading2: "Applications",
      item1: [
        "Aerospace",
        "Automotive",
        "Government",
        "Dental",
        "Medical",
        "Education",
        "Art & Fashion",
        "Agriculture",
      ],
      item2: [
        "Manufacturing",
        "Investment Casting",
        "Jigs and Fixtures",
        "Production Parts",
        "Rapid Prototyping",
        "Packaging",
        "Composite Tooling",
        "Design",
      ],
    },
    {
      id: "dropdown-2",
      label: "3D Printers & Software",
      heading1: "Technologies",
      heading2: "Printer",
      item1: [
        "FDM Technology",
        "PolyJet Technology",
        "P3™ DLP Technology",
        "SAF™ Technology",
        "Stereolithography Technology",
        "3DFashion™ Technology",
        "3d Printing FAQ",
      ],
      item2: ["Connectivity", "openAM™ Software", "Digital Anatomy™ Creator"],
    },
    {
      id: "dropdown-3",
      label: "Materials",
      item1: [
        "FDM",
        "PolyJet™",
        "Stereolithography",
        "SAF™/Powder Bed Fusion",
        "P3™ DLP Technology",
      ],
    },
    {
      id: "dropdown-4",
      label: "Manufacturing Services",
      heading1: "3D Printing Services",
      heading2: "Other Services",
      item1: [
        "FDM Printing Service",
        "P3™ DLP Printing Service",
        "PolyJet™ Printing Service",
        "SAF™ Printing Service",
        "SLA Printing Service",
        "SLS Printing Service",
        "MJF 3D Printing Service",
      ],
      item2: [
        "Design Optimization Services",
        "Finishing & Assembly",
        "Quality Assurance",
        "Rapid Prototyping",
      ],
    },
  ];

  // Close dropdown when mouse leaves
  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (openDropdownId) {
        // Check if mouse left all dropdown elements
        const isLeavingAll = dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.relatedTarget as Node)
        );
        
        if (isLeavingAll) {
          setOpenDropdownId(null);
        }
      }
    };

    if (openDropdownId) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [openDropdownId]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav>
      <ul className="flex space-x-4 p-4">
        {dropdowns.map((dropdown, index) => {
          const isOpen = openDropdownId === dropdown.id;

          return (
            <li
              key={dropdown.id}
              ref={(el) => {
                dropdownRefs.current[index] = el;
              }}
              className="relative "
              onMouseEnter={() => {
                // Clear any pending close timeout
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                setOpenDropdownId(dropdown.id);
              }}
              onMouseLeave={() => {
                // Add slight delay before closing to allow moving to dropdown
                timeoutRef.current = setTimeout(() => {
                  setOpenDropdownId(null);
                }, 300);
              }}
            >
              <button
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  isOpen
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dropdown.label}
                <span className="ml-2 w-5 h-5 ">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div 
                  className="flex flex-row absolute top-12 -left-20 mt-1 bg-white rounded-lg shadow-lg border py-1 z-50 min-w-[400px]"
                  onMouseEnter={() => {
                    // Clear close timeout when entering dropdown
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }
                  }}
                  onMouseLeave={() => {
                    // Close dropdown when leaving it
                    timeoutRef.current = setTimeout(() => {
                      setOpenDropdownId(null);
                    }, 300);
                  }}
                >
                  {/* First column */}
                  <div className="px-4 py-2 min-w-[200px] border-r border-gray-200 ">
                    {dropdown.heading1 && (
                      <h3 className="font-semibold text-gray-900 mb-2" >
                        {dropdown.heading1}
                      </h3>
                    )}
                    {dropdown.item1.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        className=" block w-full text-left cursor-pointer px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded transition-colors"
                        onClick={() => {
                          console.log(`Selected: ${item}`);
                          setOpenDropdownId(null);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  
                  {/* Second column (if exists) */}
                  {dropdown.heading2 && dropdown.item2 && (
                    <div className="px-4 py-2 min-w-[200px] border-l border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {dropdown.heading2}
                      </h3>
                      {dropdown.item2.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded transition-colors"
                          onClick={() => {
                            console.log(`Selected: ${item}`);
                            setOpenDropdownId(null);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;