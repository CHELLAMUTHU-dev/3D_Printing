"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  // Desktop dropdown (hover)
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  // Mobile dropdown (click)
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Timeout ref (Next.js safe)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const router = useRouter();

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
        "3D Printing FAQ",
      ],
      item2: ["Connectivity", "openAM™ Software", "Digital Anatomy™ Creator"],
    },
    {
      id: "dropdown-3",
      label: "Materials",
      heading1: "Materials",
      item1: [
        "FDM",
        "PolyJet™",
        "Stereolithography",
        "SAF™ / Powder Bed Fusion",
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

  return (
    <div className="flex  sm:flex-row justify-between items-center sm:items-center w-full">
      {/* ================= DESKTOP NAV ================= */}
      <nav className="relative hidden sm:block">
        <ul className="flex space-x-4 p-4 ">
          {dropdowns.map((dropdown) => {
            const isOpen = openDropdownId === dropdown.id;

            return (
              <li
                key={dropdown.id}
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setOpenDropdownId(dropdown.id);
                }}
                onMouseLeave={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  timeoutRef.current = setTimeout(() => {
                    setOpenDropdownId(null);
                  }, 250);
                }}
              >
                <button
                  className={`cursor-pointer px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    isOpen
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {dropdown.label}
                  <span>{isOpen ? <Image src="/up-arrow.png" alt="Up Arrow" width={12} height={12} /> : <Image src="/down-arrow.png" alt="Down Arrow" width={12} height={12} />}</span>
                </button>

                {isOpen && (
                  <div
                    className={`absolute top-12 ${dropdown.heading2 && dropdown.item2 ? "-left-30" : "-left-10"} mt-1 flex bg-white rounded-lg shadow-lg border border-gray-200 z-50
      ${dropdown.heading2 && dropdown.item2 ? "min-w-[420px]" : "min-w-[210px]"}
    `}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    onMouseLeave={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      timeoutRef.current = setTimeout(() => {
                        setOpenDropdownId(null);
                      }, 250);
                    }}
                  >
                    {/* Column 1 */}
                    <div
                      className={`px-4 py-3 min-w-[210px]
        ${dropdown.heading2 && dropdown.item2 ? "border-r border-gray-200" : ""}
      `}
                    >
                      {dropdown.heading1 && (
                        <h3 className="font-semibold mb-2">
                          {dropdown.heading1}
                        </h3>
                      )}
                      {dropdown.item1.map((item) => (
                        <button
                          key={item}
                          className="block w-full text-left px-2 py-2 rounded hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setOpenDropdownId(null)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    {/* Column 2 (only if exists) */}
                    {dropdown.heading2 && dropdown.item2 && (
                      <div className="px-4 py-3 min-w-[210px]">
                        <h3 className="font-semibold mb-2">
                          {dropdown.heading2}
                        </h3>
                        {dropdown.item2.map((item) => (
                          <button
                            key={item}
                            className="block w-full text-left px-2 py-2 rounded hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setOpenDropdownId(null)}
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

      {/* ================= MOBILE NAV ================= */}
      <button className="block sm:hidden ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={() => router.push("/orders")}>
          Buy
        </button>
      <nav className="sm:hidden relative p-4">
        <button
          className="p-2 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Image
            src={isMobileMenuOpen ? "/close.png" : "/hamburger-menu.png"}
            alt="Menu"
            width={20}
            height={20}
          />
        </button>

        {isMobileMenuOpen && (
          <ul className="absolute top-16 -left-40 w-72 bg-white rounded-lg shadow-lg z-50
           max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain scroll-smooth"
>
            {dropdowns.map((dropdown) => (
              <li key={dropdown.id} >
                <button
                  className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200"
                  onClick={() =>
                    setMobileOpenId((prev) =>
                      prev === dropdown.id ? null : dropdown.id,
                    )
                  }
                >
                  {dropdown.label}
                </button>

                {mobileOpenId === dropdown.id && (
                  <div className="px-2 py-2 bg-gray-50   ">
                    {dropdown.heading1 && (
                      <h3 className="font-semibold px-2 mt-2">
                        {dropdown.heading1}
                      </h3>
                    )}
                    {dropdown.item1.map((item) => (
                      <button
                        key={item}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => {
                          setMobileOpenId(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item}
                      </button>
                    ))}

                    {dropdown.heading2 && dropdown.item2 && (
                      <>
                        <h3 className="font-semibold px-2 mt-4">
                          {dropdown.heading2}
                        </h3>
                        {dropdown.item2.map((item) => (
                          <button
                            key={item}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => {
                              setMobileOpenId(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
