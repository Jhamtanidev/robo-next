"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/log.png";
import { useAuth } from "@/components/AuthProvider";
import SignOut from "../../components/SignOut";
// import "./nav.css";
import { FaBars, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { DatabaseIcon, HomeIcon, TemplateIcon } from "@heroicons/react/solid";
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showSubsections, setShowSubsections] = useState(false);

  // Function to toggle sub-section visibility
  const toggleSubsections = () => {
    setShowSubsections(!showSubsections);
  };
  const toggleNavbar = () => {
    setNavbarOpen((state) => !state);
  };
  const { initial, user, view, signOut } = useAuth();

  return (
    <div>
      <nav className=" nav left-0 right-0 top-0  z-10 h-20 w-full bg-transparent font-montserrat shadow-xl md:hidden">
        <div className="mx-auto flex flex-col justify-between md:flex-row md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between md:block">
              {/* LOGO */}
              <div className="mt-4 md:mb-0">
                <a
                  href="/"
                  className="flex items-center text-2xl font-semibold text-black"
                >
                  <Image
                    src={logo}
                    width="39px"
                    height="51.356px"
                    className="h mr-3"
                    alt=""
                  />
                  Wander
                  <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-blue-400">
                    Sub
                  </span>
                </a>
              </div>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-color-white outline-none focus:border focus:border-gray-400"
                  onClick={toggleNavbar}
                >
                  {navbarOpen ? (
                    <FaTimes color="black" width={30} height={30} alt="close" />
                  ) : (
                    <FaBars color="black" width={30} height={30} alt="menu" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`z-50 mt-3 flex-1 bg-white p-12 pb-3 md:mt-0 md:block md:bg-transparent md:p-0 md:pb-0 ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="h-screen items-center justify-center md:flex md:h-auto ">
              <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                <a
                  href="/"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <HomeIcon className="mr-2 h-5 w-5" />
                  Home
                </a>
              </li>
              <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                <a
                  className={`flex items-center text-gray-900 hover:text-blue-600 ${
                    showSubsections ? "bg-gray-400" : ""
                  }`}
                  onClick={toggleSubsections}
                >
                  <DatabaseIcon className="mr-2 h-5 w-5" />
                  All Records
                </a>

                {/* Sub-sections */}
                {showSubsections && (
                  <ul className="ml-4">
                    <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                      <a
                        href="/dashboard/ph"
                        className="text-gray-900 hover:text-blue-600"
                      >
                        pH
                      </a>
                    </li>
                    <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                      <a
                        href="/dashboard/tds"
                        className="text-gray-900 hover:text-blue-600"
                      >
                        TDS
                      </a>
                    </li>
                    <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                      <a
                        href="/dashboard/turb"
                        className="text-gray-900 hover:text-blue-600"
                      >
                        Turbidity
                      </a>
                    </li>
                    <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                      <a
                        href="/dashboard/temp"
                        className="text-gray-900 hover:text-blue-600"
                      >
                        Temperature
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                <a
                  href="/dashboard/rovstats"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <TemplateIcon className="mr-2 h-5 w-5" />
                  ROV statistics
                </a>
              </li>
              <li className=" border-rounded py-2 text-center text-xl text-color-primary  hover:bg-blue-400 md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                <a
                  href="/dashboard/reletpos"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <FaMapMarkerAlt className="mr-2 h-5 w-5" />
                  Object Mapping
                </a>
              </li>
              <div className="mt-auto flex  items-center justify-center rounded-full px-2 py-2 ">
                <SignOut />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
