import createClient from "src/lib/supabase-server";

import React from "react";
import "./dashboard.css";
import Sidebar from "@/components/Sidebar/sidebar";
import { redirect } from "next/navigation";
import Alreco from "@/components/parameters/Alreco";
import DNavbar from "./DNavbar";
const Dashboard = async (params) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-dashboard bg-cover bg-no-repeat md:w-fit md:flex-row ">
      <Sidebar />
      <div className="m-10 flex grow flex-row items-center justify-center ">
        <div
          className="card flex grow self-start"
          style={{
            background:
              "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
          }}
        >
          <Alreco />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
