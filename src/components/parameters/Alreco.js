/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase-browser";
import Chart from "chart.js/auto";

const Alreco = () => {
  const [Records, setRecords] = useState([]);
  const [Reco, setReco] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlegetItems();
    handleoneItems();
    const parameters = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "parameters" },
        (payload) => {
          console.log("Change received!", payload);
          handlegetItems();
        }
      )
      .subscribe();
  }, []);

  const handlegetItems = async () => {
    try {
      setLoading(true);
      const { data: Records } = await supabase
        .from("parameters")
        .select("ph, tds, turb, bat_vol, created_at")
        .order("created_at", { ascending: false });

      console.log(Records);
      if (Records != null) {
        setRecords(Records);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleoneItems = async () => {
    try {
      setLoading(true);
      const { data: Reco } = await supabase
        .from("parameters")
        .select("ph, tds, turb, bat_vol, created_at")
        .order("created_at", { ascending: false })
        .limit(1);
      console.log(Reco);
      if (Reco != null) {
        setReco(Reco);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Records.map((Record) => Record.created_at),
        datasets: [
          {
            data: Records.map((Record) => Record.temp),
            label: "Temperature",
            borderColor: "blue",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
          {
            data: Records.map((Record) => Record.ph),
            label: "pH",
            borderColor: "green",
            backgroundColor: "#71d1bd",
            fill: false,
          },
          {
            data: Records.map((Record) => Record.turb),
            label: "Turbidity",
            borderColor: "orange",
            backgroundColor: "#ffc04d",
            fill: false,
          },
          {
            data: Records.map((Record) => Record.tds),
            label: "TDS",
            borderColor: "red",
            backgroundColor: "#d78f89",
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: "white", // Change the font color of x-axis ticks
            },
            title: {
              display: true,
              text: "Time",
              color: "white", // Change the font color of x-axis title
            },
          },
          y: {
            ticks: {
              color: "white", // Change the font color of y-axis ticks
            },
            title: {
              display: true,
              text: "Values",
              color: "white", // Change the font color of y-axis title
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white", // Change the font color of legend labels
            },
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [Records]);

  return (
    <div className="flex-display md container my-1 font-montserrat max-sm:w-screen ">
      <div className="container mx-auto py-6 lg:px-10 lg:py-8 ">
        <div className="grid w-full gap-1 max-sm:grid-cols-2 max-sm:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {Reco.map((record) => (
            <>
              <div
                className=" card2 flex flex-col justify-between rounded-lg  shadow-md"
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropFilter: "blur(17.019758224487305px)",
                }}
              >
                <div className="pl-4">
                  <h2 className="text-top text-xl font-semibold text-gray-200 ">
                    pH
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.ph}
                  </h3>
                </div>
              </div>
              <div
                className=" card2 flex flex-col justify-between rounded-lg  shadow-md"
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropFilter: "blur(17.019758224487305px)",
                }}
              >
                <div className="pl-4">
                  <h2 className="text-top text-xl font-semibold text-gray-200 ">
                    Temperature
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.temp} K
                  </h3>
                </div>
              </div>
              <div
                className=" card2 flex flex-col justify-between rounded-lg  shadow-md"
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropFilter: "blur(17.019758224487305px)",
                }}
              >
                <div className="pl-4">
                  <h2 className="text-top text-xl font-semibold text-gray-200 ">
                    Turbidity
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.turb}
                  </h3>
                </div>
              </div>
              <div
                className=" card2 flex flex-col justify-between rounded-lg  shadow-md"
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropFilter: "blur(17.019758224487305px)",
                }}
              >
                <div className="pl-4">
                  <h2 className="text-top text-xl font-semibold text-gray-200 ">
                    TDS
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.tds}
                  </h3>
                </div>
              </div>
              <div
                className=" card2 flex flex-col justify-between rounded-lg  shadow-md"
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropFilter: "blur(17.019758224487305px)",
                }}
              >
                <div className="pl-4">
                  <h6 className="text-top text-xl font-semibold text-gray-200 ">
                    Battery voltage
                  </h6>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.bat_vol}
                  </h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="graph">
        <div className="max-sm:my-4 md:my-8">
          <div className="relative mx-auto max-sm:overflow-x-auto">
            <div
              className="card relative h-full rounded-xl border border-gray-400 shadow-xl max-sm:w-fit "
              style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
              }}
            >
              <canvas
                id="myChart"
                className="relative max-sm:min-h-[30rem] max-sm:min-w-[90rem] "
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" overflow-y-auto rounded-lg shadow-lg"
        style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}
      >
        <div className="p-4">
          <table className="w-full table-auto text-left text-sm  text-gray-200">
            <thead>
              <tr>
                <th scope="col" className="py-3 md:px-6">
                  Created_at
                </th>
                <th scope="col" className="py-3 md:px-6">
                  Temp
                </th>
                <th scope="col" className="py-3 md:px-6">
                  pH
                </th>
                <th scope="col" className="py-3 md:px-6">
                  Turbidity
                </th>
                <th scope="col" className="py-3 md:px-6">
                  TDS
                </th>
                <th scope="col" className="py-3 md:px-6">
                  Battery_voltage
                </th>
              </tr>
            </thead>
            <tbody>
              {Records.map((Record) => (
                <tr className="border-b">
                  <th scope="row" className=" px-6 py-4 font-medium  ">
                    {Record.created_at}
                  </th>
                  <td className="px-6 py-4">{Record.temp}</td>
                  <td className="px-6 py-4">{Record.ph}</td>
                  <td className="px-6 py-4">{Record.turb}</td>
                  <td className="px-6 py-4">{Record.tds}</td>
                  <td className="px-6 py-4">{Record.bat_vol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alreco;
