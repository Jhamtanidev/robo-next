/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import supabase from "@/lib/supabase-browser";

function ReletivePos() {
  const [markerPositions, setMarkerPositions] = useState([]);
  const [showMarkerPopup, setShowMarkerPopup] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null); // Track the selected marker
  const canvasSize = { width: 400, height: 400 };
  const canvasRef = useRef(null);

  useEffect(() => {
    async function fetchAllValues() {
      try {
        const { data, error } = await supabase
          .from("positional_para")
          .select("Acc_x, Acc_y")
          .order("created_at", { ascending: true });

        if (error) {
          throw error;
        }

        const values = data;

        const markers = values.map((value) => ({
          x: value.Acc_x,
          y: value.Acc_y,
        }));

        setMarkerPositions(markers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAllValues();

    const parameters = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "parameters" },
        (payload) => {
          console.log("Change received!", payload);
          fetchAllValues();
        }
      )
      .subscribe();
  }, []);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedMarker = markerPositions.find(
      (marker) =>
        x >= marker.x - 10 &&
        x <= marker.x + 10 &&
        y >= marker.y - 10 &&
        y <= marker.y + 10
    );

    if (clickedMarker) {
      setShowMarkerPopup(true);
      setSelectedMarker(clickedMarker);
    } else {
      setShowMarkerPopup(false);
    }
  };

  const drawCanvas = (ctx) => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    ctx.strokeStyle = "#ccc";
    for (let x = 0; x <= canvasSize.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasSize.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvasSize.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvasSize.width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(0, canvasSize.height / 2);
    ctx.lineTo(canvasSize.width, canvasSize.height / 2);
    ctx.moveTo(canvasSize.width / 2, 0);
    ctx.lineTo(canvasSize.width / 2, canvasSize.height);
    ctx.stroke();

    if (markerPositions.length > 0) {
      ctx.fillStyle = "red";
      const markerRadius = 5;
      markerPositions.forEach((marker) => {
        ctx.beginPath();
        ctx.arc(marker.x, marker.y, markerRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawCanvas(ctx);
  }, [markerPositions]);

  return (
    <div
      className="card text-color-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
      }}
    >
      <h1 className="mb-4 text-2xl font-semibold">Relative Position of ROV</h1>
      <div
        className="relative w-1/2 rounded-lg bg-sky-50 p-4 shadow-md"
        style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}
      >
        <div className="relative  h-96">
          <canvas
            ref={canvasRef}
            className="absolute left-0 top-0 cursor-pointer"
            width={canvasSize.width}
            height={canvasSize.height}
            onClick={handleCanvasClick}
          ></canvas>
          {showMarkerPopup && selectedMarker && (
            <div
              className="absolute p-2 shadow-md"
              style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropFilter: "blur(17.019758224487305px)",
                top: selectedMarker.y + 20,
                left: selectedMarker.x + 10,
              }}
            >
              <p>X: {selectedMarker.x.toFixed(2)}</p>
              <p>Y: {selectedMarker.y.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReletivePos;
