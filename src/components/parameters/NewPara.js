/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase-browser";
import Chart from "chart.js/auto";

const NewPara = () => {
  const [Records, setRecords] = useState([]);
  const [Reco, setReco] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlegetItems();
    handleoneItems();

    const channels = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "rovparams" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();

    return () => {
      channels.unsubscribe();
    };
  }, []);

  const handlegetItems = async () => {
    try {
      setLoading(true);
      const { data: Records } = await supabase
        .from("rovparams")
        .select("pres, qrstr, depth, temp,  created_at")
        .order("created_at", { ascending: true });

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
        .from("rovparams")
        .select("pres, qrstr, turb, temp, bat_vol, created_at")
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
  //   useEffect(() => {
  //     const ctx = document.getElementById("myChart").getContext("2d");
  //     const myChart = new Chart(ctx, {
  //       type: "line",
  //       data: {
  //         labels: Records.map((Record) => Record.created_at),
  //         datasets: [
  //           {
  //             data: Records.map((Record) => Record.temp),
  //             label: "Temperature",
  //             borderColor: "blue",
  //             backgroundColor: "#7bb6dd",
  //             fill: false,
  //           },
  //           {
  //             data: Records.map((Record) => Record.pres),
  //             label: "pres",
  //             borderColor: "green",
  //             backgroundColor: "#71d1bd",
  //             fill: false,
  //           },
  //           {
  //             data: Records.map((Record) => Record.depth),
  //             label: "depth",
  //             borderColor: "orange",
  //             backgroundColor: "#ffc04d",
  //             fill: false,
  //           },
  //           {
  //             data: Records.map((Record) => Record.qrstr),
  //             label: "qrstr",
  //             borderColor: "red",
  //             backgroundColor: "#d78f89",
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           x: {
  //             ticks: {
  //               color: "white", // Change the font color of x-axis ticks
  //             },
  //             title: {
  //               display: true,
  //               text: "Time",
  //               color: "white", // Change the font color of x-axis title
  //             },
  //           },
  //           y: {
  //             ticks: {
  //               color: "white", // Change the font color of y-axis ticks
  //             },
  //             title: {
  //               display: true,
  //               text: "Values",
  //               color: "white", // Change the font color of y-axis title
  //             },
  //           },
  //         },
  //         plugins: {
  //           legend: {
  //             labels: {
  //               color: "white", // Change the font color of legend labels
  //             },
  //           },
  //         },
  //       },
  //     });

  //     return () => {
  //       if (myChart) {
  //         myChart.destroy();
  //       }
  //     };
  //   }, [Records]);

  return (
    <div className=" flex-display container mx-auto my-1 p-4 font-montserrat ">
      <div className="container mx-auto px-4 py-6 lg:px-10 lg:py-8 ">
        <div className="grid  gap-1 sm:grid-cols-2 sm:p-2  md:grid-cols-3 lg:grid-cols-5 ">
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
                    pres
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.pres}
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
                    depth
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.depth}
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
                    qrstr
                  </h2>
                  <h3 className="self-end text-lg text-color-white ">
                    {record.qrstr}
                  </h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* <div className="gra">
        <div className="my-8 ">
          <div className="mx-auto  max-w-screen-lg max-w-screen-md">
            <div
              className="card relative w-full rounded-xl border border-gray-400 shadow-xl "
              style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
              }}
            >
              <canvas id="myChart" />
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="rounded-lg shadow-lg"
        style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}
      >
        <div className="flex w-full flex-row items-center justify-center p-4">
          <table className="w-full table-auto text-left text-sm  text-gray-200">
            <thead>
              <tr className="border">
                <th scope="col" className=" border py-3 md:px-6">
                  Created_at
                </th>
                <th scope="col" className="border py-3 md:px-6">
                  Temperature
                </th>
                <th scope="col" className="border py-3 md:px-6">
                  Pressure
                </th>
                <th scope="col" className="border py-3  md:px-6">
                  Depth
                </th>
                <th scope="col" className="border py-3 md:px-6">
                  BarCode
                </th>
              </tr>
            </thead>
            <tbody>
              {Records.map((Record) => (
                <tr className="border">
                  <th scope="row" className=" px-6 py-4 font-medium  ">
                    {Record.created_at}
                  </th>
                  <td className="border px-6 py-4">{Record.pres}</td>
                  <td className="border px-6 py-4">{Record.depth}</td>
                  <td className="border px-6 py-4">{Record.temp}</td>
                  <td className="border px-6 py-4">{Record.qrstr}</td>
                  {/* <td className="px-6 py-4">{Record.bat_vol}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewPara;
