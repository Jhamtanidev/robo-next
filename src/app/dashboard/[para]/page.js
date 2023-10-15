"use client";

import React from "react";
import Ph from "@/components/parameters/Ph";
import Temp from "@/components/parameters/Temp";
import Turb from "@/components/parameters/Turb";
import Alreco from "@/components/parameters/Alreco";
import Tds from "@/components/parameters/Tds";
import Sidebar from "@/components/Sidebar/sidebar";
import RovStats from "@/components/parameters/rovstats";
import Reletpos from "@/components/parameters/reletpos";  

const page = ({ params }) => {
  let content;

  switch (params.para) {
    case "ph":
      content = <Ph />;
      break;
    case "tds":
      content = <Tds />;
      break;
    case "temp":
      content = <Temp />;
      break;
    case "turb":
      content = <Turb />;
      break;
    case "rovstats":
      content = <RovStats />;
      break;
    case "reletpos":
      content = <Reletpos />;
      break;
    default:
      content = <Alreco />; // Handle the default case if needed
  }

  console.log(params.para);
  return (
    <div className="relative flex-row bg-dashboard lg:flex">
      <Sidebar />
      <div className="container mx-auto mt-4 lg:mt-12 ">
        <div className="mx-2 p-4 shadow-sm ">{content}</div>
      </div>
    </div>
  );
};

export default page;
