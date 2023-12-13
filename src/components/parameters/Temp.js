import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase-browser";
import Chart from "chart.js/auto";
// import 'chart.js/dist/chart.css';
const Temp = () => {
  const [RecoTemp, setRecoTemp] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    filtergetTempItems();
    const rovparams = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "rovparams" },
        (payload) => {
          console.log("Change received!", payload);
          filtergetTempItems();
        }
      )
      .subscribe();
  }, []);
  const filtergetTempItems = async () => {
    try {
      setLoading(true);
      const { data: RecoTemp } = await supabase
        .from("rovparams")
        .select("created_at,temp ") // columns to select from the database
        .order("created_at", { ascending: false }); // sort the data so the last item comes on top;

      console.log(RecoTemp);
      if (RecoTemp != null) {
        setRecoTemp(RecoTemp); // [product1,product2,product3]
        // { (RecoTemp>10) ?  <Horizontalchart/> : false }
      }
      // if (RecoTemp.map((Record)=>Record.temp>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (RecoTemp.length > 0) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: RecoTemp.map((record) => record.created_at),
          datasets: [
            {
              data: RecoTemp.map((record) => record.temp),
              label: "Temperature",
              borderColor: "green",
              backgroundColor: "#71d1bd",
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
  }, [RecoTemp]);
  // console.log(RecoTemp.temp);

  return (
    <div className="container mx-auto justify-center rounded-lg p-4 font-montserrat">
      <div
        className="rounded-lg p-4 shadow-lg"
        style={{
          background:
            "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
        }}
      >
        <div className="graph overflow-x-auto">
          <div className="my-8">
            <div className="mx-auto max-w-screen-md">
              <div
                className="rounded-xl border border-gray-400 shadow-xl"
                style={{
                  background: "rgba(71, 71, 71, 0.25)",
                  backdropfilter: "blur(17.019758224487305px)",
                }}
              >
                <canvas id="myChart" className="min-h-[30rem]" />
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
                <th className="border-b px-4 py-2 ">Temperature</th>
              </tr>
            </thead>
            <tbody>
              {RecoTemp.map((Record, index) => (
                <tr key={Record.created_at} className="">
                  <td
                    className={
                      "border-r px-4 py-2" +
                      (index === RecoTemp.length - 1 ? "" : " border-b")
                    }
                  >
                    {Record.created_at}
                  </td>
                  <td
                    className={
                      "px-4 py-2" +
                      (index === RecoTemp.length - 1 ? "" : " border-b")
                    }
                  >
                    {Record.temp}
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

          <div className="align-items-right container  mt-4  max-w-fit max-sm:mt-2">
            <div
              className="card shadow-0 border"
              style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
              }}
            >
              <div className="card-body w-1/2">
                <h4 className="sfw-normal mb-1">Temperature range</h4>

                <p>
                  Max: <strong>20°C</strong>, Min: <strong>10°C</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
