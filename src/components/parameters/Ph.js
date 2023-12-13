/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase-browser";
import Chart from "chart.js/auto";
import "./param.css";
const ph = () => {
  const [RecopH, setRecopH] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetpHItems();

    const parameters = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "parameters" },
        (payload) => {
          console.log("Change received!", payload);
          filtergetpHItems();
        }
      )
      .subscribe();
  }, []);

  const filtergetpHItems = async () => {
    try {
      setLoading(true);
      const { data: RecopH } = await supabase
        .from("parameters")
        .select("created_at,ph ") // columns to select from the database
        .order("created_at", { ascending: false }); // sort the data so the last item comes on top;

      console.log(RecopH);
      if (RecopH != null) {
        setRecopH(RecopH); // [product1,product2,product3]
        // { (RecopH>10) ?  <Horizontalchart/> : false }
      }
      // if (RecopH.map((Record)=>Record.ph>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (RecopH.length > 0) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: RecopH.map((record) => record.created_at),
          datasets: [
            {
              data: RecopH.map((record) => record.ph),
              label: "pH",
              borderColor: "blue",
              backgroundColor: "#7bb6dd",
              color: "#36A2EB",
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
        // Destroy the chart when the component unmounts
        if (myChart) {
          myChart.destroy();
        }
      };
    }
  }, [RecopH]);

  return (
    <div
      className=" container mx-auto rounded-lg p-4 font-montserrat"
      style={{
        background:
          "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
      }}
    >
      <div className="container1">
        <div className="graph overflow-x-auto">
          <div className="my-8">
            <div className="mx-auto max-w-screen-lg max-w-screen-md">
              <div
                className=" card rounded-xl border border-gray-400 shadow-xl "
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropfilter: "blur(17.019758224487305px)",
                }}
              >
                <canvas id="myChart" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center p-4">
          <table
            className="table w-fit table-auto text-left font-montserrat  text-sm text-gray-200 "
            style={{
              background: "rgba(71, 71, 71, 0.25)",
              backdropfilter: "blur(17.019758224487305px)",
            }}
          >
            <thead>
              <tr className="rounded-xl">
                <th className="border-b border-r px-4 py-2">Created_at</th>
                <th className="border-b px-4 py-2 ">pH</th>
              </tr>
            </thead>
            <tbody>
              {RecopH.map((Record, index) => (
                <tr key={Record.created_at} className="">
                  <td
                    className={
                      "border-r px-4 py-2" +
                      (index === RecopH.length - 1 ? "" : " border-b")
                    }
                  >
                    {Record.created_at}
                  </td>
                  <td
                    className={
                      "px-4 py-2" +
                      (index === RecopH.length - 1 ? "" : " border-b")
                    }
                  >
                    {Record.ph}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="card font-montserrat text-color-white"
          style={{
            background: "rgba(71, 71, 71, 0.25)",
            backdropfilter: "blur(17.019758224487305px)",
          }}
        >
          <h2 className="mt-4 font-montserrat  text-3xl text-color-white">
            Records having greater than 8.5 pH
          </h2>

          <div className="container  mt-4">
            <div
              className="card shadow-0 border"
              style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
              }}
            >
              <div className="card-body p-0">
                <h3 className="sfw-normal mb-1 text-xl">pH Range</h3>
                <p>
                  Max: <strong>8.5</strong>, Min: <strong>6.5</strong>
                </p>

                <div className="align-items-center flex flex-row">
                  <i>
                    1.IS 10500-2012 Acceptable limits:6.5-8.5
                    <br />
                    permissible:No relaxation
                    <br />
                    2.Suggestions:Increase pH by soda ash Decrease pH by white
                    vinegar/citric acid
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ph;
