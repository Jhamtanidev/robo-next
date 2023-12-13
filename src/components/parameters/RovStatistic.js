/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase-browser";
import Chart from "chart.js/auto";

const RovStatistic = () => {
  const [RecoStat, setRecoState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetstatItems();

    const channels = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "positional_para" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
  }, []);

  const filtergetstatItems = async () => {
    try {
      setLoading(true);
      const { data: RecoStat } = await supabase
        .from("positional_para")
        .select("created_at,Acc_x,Acc_y,Acc_z,gyro_roll,gyro_pitch,gyro_yaw ") // columns to select from the database
        .order("created_at", { ascending: false }); // sort the data so the last item comes on top;

      // console.log(RecoStat.map((reco)=>{reco.gyro_roll}));
      if (RecoStat != null) {
        setRecoState(RecoStat); // [product1,product2,product3]
        // { (RecoStat>10) ?  <Horizontalchart/> : false }
      }
      // if (RecoStat.map((Record)=>Record.ph>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div
      className="h-50 container mx-auto  rounded-lg font-montserrat text-color-white shadow-lg"
      style={{
        background:
          "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
      }}
    >
      <div
        className="overflow-x-auto rounded-lg p-4"
        style={{
          background: "rgba(71, 710, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}
      >
        <table className="w-full table-auto rounded-t-2xl ">
          <thead className="rounded-t-2xl border">
            <tr className="rounded-t-2xl border">
              <th scope="col" className="px-4 py-2">
                Created_at
              </th>
              <th scope="col" className="px-4 py-2" colSpan={3}>
                Accelerometer
              </th>
              <th scope="col" className="px-4 py-2" colSpan={3}>
                Gyroscope
              </th>
            </tr>
            <tr className="border">
              <th className="px-6 py-3"></th>

              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
              >
                Acc_x
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
              >
                Acc_y
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
              >
                Acc_z
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
              >
                gyro_roll
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
              >
                gyro_pitch
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
              >
                gyro_yaw
              </th>
            </tr>
          </thead>
          <tbody>
            {RecoStat.map((Record, index) => (
              <tr
                key={Record.created_at}
                className={
                  "border text-center" +
                  (index === RecoStat.length - 1 ? " rounded-b-2xl" : "")
                }
              >
                <td scope="row" className="px-4 py-2">
                  {Record.created_at}
                </td>
                <td scope="row" className="px-4 py-2">
                  {Record.Acc_x}
                </td>
                <td scope="row" className="px-4 py-2">
                  {Record.Acc_y}
                </td>
                <td scope="row" className="px-4 py-2">
                  {Record.Acc_z}
                </td>
                <td scope="row" className="px-4 py-2">
                  {Record.gyro_roll}
                </td>
                <td scope="row" className="px-4 py-2">
                  {Record.gyro_pitch}
                </td>
                <td scope="row" className="px-4 py-2">
                  {Record.gyro_yaw}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RovStatistic;
