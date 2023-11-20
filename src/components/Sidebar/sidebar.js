/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { HomeIcon, TemplateIcon, DatabaseIcon, NewspaperIcon } from "@heroicons/react/solid";

// Import your company logo

// Import a sample user avatar (replace with your actual user avata
import SignOut from "../SignOut";
import Link from "next/link";
import {
  FaMapMarked,
  FaMapMarkedAlt,
  FaMapMarker,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  // Use state to manage the sub-sections' visibility
  const [showSubsections, setShowSubsections] = useState(false);

  // Function to toggle sub-section visibility
  const toggleSubsections = () => {
    setShowSubsections(!showSubsections);
  };

  return (
    <div
      className="sticky left-0 top-0 flex w-64 flex-col  p-4 text-white  "
      style={{
        background:
          "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
        height: "100vh",
      }}
    >
      {/* Company Name and Logo in a Row */}
      <div className="mb-4 flex items-center">
        <Link href={"/"}>
          {" "}
          <img
            src={"/logo1.png"}
            alt="Company Logo"
            className="mr-2 h-16 w-16"
          />
          <h1 className="text-xl font-semibold">WanderSub</h1>
        </Link>
      </div>

      {/* Main Navigation */}
      <ul className="flex-1">
        <li className="mb-4">
          <a
            href="/dashboard"
            className="flex items-center text-gray-200 hover:text-blue-600"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a
            className={`flex items-center text-gray-200 hover:text-blue-600 ${
              showSubsections ? "bg-gray-400" : ""
            }`}
            // href="/dashboard"
            onClick={toggleSubsections}
          >
            <DatabaseIcon className="mr-2 h-5 w-5" />
            All Records
          </a>

          {/* Sub-sections */}
          {showSubsections && (
            <ul className="ml-4">
              <li className="mb-4">
                <a
                  href="/dashboard/ph"
                  className="text-gray-200 hover:text-blue-600"
                >
                  pH
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/dashboard/tds"
                  className="text-gray-200 hover:text-blue-600"
                >
                  TDS
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/dashboard/turb"
                  className="text-gray-200 hover:text-blue-600"
                >
                  Turbidity
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/dashboard/temp"
                  className="text-gray-200 hover:text-blue-600"
                >
                  Temperature
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4">
          <a
            href="/dashboard/rovstats"
            className="flex items-center text-gray-200 hover:text-blue-600"
          >
            <TemplateIcon className="mr-2 h-5 w-5" />
            ROV statistics
          </a>
        </li>
        <li className="mb-4">
          <a
            href="/dashboard/reletpos"
            className="flex items-center text-gray-200 hover:text-blue-600"
          >
            <FaMapMarkerAlt className="mr-2 h-5 w-5" />
            Object Mapping
          </a>
        </li>
        <li className="mb-4">
          <a
            href="dashboard/rovparams"
            className="flex items-center text-gray-200 hover:text-blue-600"
          >
            <NewspaperIcon className="mr-2 h-5 w-5" />
            ROV_parameters
          </a>
        </li>
      </ul>

      {/* Divider Line */}
      <hr className="my-4 border-t border-gray-600" />

      {/* User Avatar
    <div className="mb-4">
  
      <div className="flex items-center justify-center">
        <img src={"/assets/Isha.jpg"} alt="User Avatar" className="w-16 h-16 rounded-full" />
      </div>
    </div> */}

      {/* Logout Button */}
      <div className="mt-auto flex w-full items-center justify-center rounded-full px-6 py-2 ">
        <SignOut />
      </div>
    </div>
  );
};

export default Sidebar;
