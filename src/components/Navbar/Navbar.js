"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/log.png";
import { useAuth } from "../AuthProvider";
import SignOut from "../SignOut";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(state => !state);
  };
  const { initial, user, view, signOut } = useAuth();

  return (
    <div>
      <nav className=" nav  left-0 right-0 top-0 z-10 h-20 w-full bg-transparent font-montserrat shadow-xl ">
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
            className={`mt-3 flex-1 z-50 p-12 pb-3 bg-white md:bg-transparent md:mt-0 md:block md:p-0 md:pb-0 ${navbarOpen ? "block" : "hidden"
              }`}
          >
            <ul className="h-screen items-center justify-center md:flex md:h-auto ">
              <li className=" py-2 text-center text-xl text-color-primary hover:bg-blue-400  md:border-b-0 border-rounded  md:px-6  md:hover:bg-transparent md:hover:text-blue-400">
                <Link href="/about" onClick={() => setNavbar(!navbar)}>
                  Team
                </Link>
              </li>

              <li className=" px-6 py-2 text-center  text-xl text-color-primary  hover:bg-blue-400  md:border-b-0 border-rounded  md:hover:bg-transparent md:hover:text-blue-400">
                <Link href="/contactus" onClick={() => setNavbar(!navbar)}>
                  Contact Us
                </Link>
              </li>
              {/* <li className=" px-6 py-2 text-center  text-xl text-color-primary  hover:bg-blue-400  md:border-b-0 border-rounded  md:hover:bg-transparent md:hover:text-blue-400">
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li> */}
              {user ? (
                <>
                  <li className=" px-6 py-2 text-center  text-xl text-color-primary  hover:bg-blue-400  md:border-b-0 border-rounded  md:hover:bg-transparent md:hover:text-blue-400">
                    <Link href="/profile" onClick={() => setNavbar(!navbar)}>
                      Profile
                    </Link>
                  </li>
                  <li className=" px-6 py-2 text-center  text-xl text-color-primary  hover:bg-blue-400  md:border-b-0 border-rounded  md:hover:bg-transparent md:hover:text-blue-400">
                    <Link
                      href="/dashboard"
                      onClick={() => setNavbar(!navbar)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className=" px-6 py-2 text-center  text-xl text-color-primary  hover:bg-blue-400  md:border-b-0 border-rounded  md:hover:bg-transparent md:hover:text-blue-400">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      <SignOut />
                    </Link>
                  </li>
                </>
              ) : (
                <li className=" px-6 py-2  text-center  text-xl text-color-primary  hover:bg-blue-400  md:border-b-0 border-rounded  md:hover:bg-transparent md:hover:text-blue-400">
                  <Link
                    href="/auth/signin"
                    onClick={() => setNavbar(!navbar)}
                  >
                    SignIn
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
