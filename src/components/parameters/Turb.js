/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase-browser";
import Chart from "chart.js/auto";

const turb = () => {
  const [Recoturb, setRecoturb] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetturbItems();
    const parameters = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "parameters" },
        (payload) => {
          console.log("Change received!", payload);
          filtergetturbItems();
        }
      )
      .subscribe();
  }, []);

  const filtergetturbItems = async () => {
    try {
      setLoading(true);
      const { data: Recoturb } = await supabase
        .from("parameters")
        .select("created_at,turb ") // columns to select from the database
        .order("created_at", { ascending: false }); // sort the data so the last item comes on top;

      console.log(Recoturb);
      if (Recoturb != null) {
        setRecoturb(Recoturb); // [product1,product2,product3]
        // { (Recoturb>10) ?  <Horizontalchart/> : false }
      }
      // if (Recoturb.map((Record)=>Record.turb>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (Recoturb.length > 0) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: Recoturb.map((record) => record.created_at),
          datasets: [
            {
              data: Recoturb.map((record) => record.turb),
              label: "Turbidity",
              borderColor: "orange",
              backgroundColor: "#ffc04d",
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
  }, [Recoturb]);

  return (
    <div className="container mx-auto justify-center rounded-lg p-4 font-montserrat">
      <div
        className="rounded-lg p-4 shadow-lg"
        style={{
          background:
            "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
        }}
      >
        <div className="graph">
          <div className="my-8">
            <div className="mx-auto max-w-screen-md">
              <div
                className="rounded-xl border border-gray-400 shadow-xl"
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
            className="table w-full table-auto text-left font-montserrat  text-sm text-gray-200 "
            style={{
              background: "rgba(71, 71, 71, 0.25)",
              backdropfilter: "blur(17.019758224487305px)",
            }}
          >
            <thead>
              <tr className="rounded-xl">
                <th className="border-b border-r px-4 py-2">Created_at</th>
                <th className="border-b px-4 py-2">Turbidity</th>
              </tr>
            </thead>
            <tbody>
              {Recoturb.map((Record, index) => (
                <tr key={Record.created_at} className="">
                  <td
                    className={
                      "border-r px-4 py-2" +
                      (index === Recoturb.length - 1 ? "" : " border-b")
                    }
                  >
                    {Record.created_at}
                  </td>
                  <td
                    className={
                      "px-4 py-2" +
                      (index === Recoturb.length - 1 ? "" : " border-b")
                    }
                  >
                    {Record.turb}
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
            Records having greater than 5 NTU Turbidity
          </h2>

          <div className="align-items-right container  mt-4">
            <div
              className="card shadow-0 border"
              style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
              }}
            >
              <div className="card-body p-4">
                <h4 className="sfw-normal mb-1">Turbidity range</h4>

                <p>
                  Max: <strong>5 NTU</strong>, Min: <strong>1 NTU</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i>
                    1.IS 10500:2010
                    <br />
                    Acceptable unit:1 NTU Permissible limits:5 NTU
                    <br />
                    2.Suggestions:Settling or filtrations process using sand
                    filtration,settling tanks and clarifiers.
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

export default turb;
