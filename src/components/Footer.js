/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
const Footer = () => {
  const socialMediaLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaDiscord />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaGithub />, url: "#" },
    { icon: <FaDribbble />, url: "#" },
  ];

  return (
    <footer className="bg-white">
      <div className="water-ripple"></div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="/"
              className="flex items-center text-2xl font-semibold text-black"
            >
              <img src="../../public/logo.png" className="mr-3 h-8" alt="" />
              Wander
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-blue-400">
                Sub
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <ul className="font-medium text-gray-500 dark:text-gray-800">
                <li className="mb-4">
                  <a href="/aboutus" className="hover:underline">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="font-medium text-gray-500 dark:text-gray-800">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terms and Services
                  </a>
                </li>
              </ul>
            </div>
            <div>{/* Add content for the second column */}</div>
            <div>{/* Add content for the third column */}</div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-800 sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              WanderSub™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
            {socialMediaLinks.map((linkItem, index) => (
              <a
                key={index}
                href={linkItem.url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {linkItem.icon}
                <span className="sr-only">Social Media</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
