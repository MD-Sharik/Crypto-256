import React from "react";
import "./App.css";
import { Chart, defaults } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

function Dashboard() {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  return (
    <div className="h-screen bg-black">
      <div id="d1" className="h-screen">
        <div className="flex p-5 justify-between">
          <div className="w-[30%] bg-black/30 shadow-3xl backdrop-blur-sm h-[95vh] rounded-xl">
            g
          </div>
          <div className="w-[69%] h-[95vh] rounded-xl flex flex-col justify-between">
            <div className="h-[48.8%] rounded-xl bg-black/30 shadow-3xl backdrop-blur-sm">
              <Line
                data={{
                  labels: [
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                  ],
                  datasets: [
                    {
                      label: "BTC",
                      data: [7000, 7500, 26500, 64500, 46000, 43000, 70000],
                    },
                    {
                      label: "ETH",
                      data: [240, 250, 660, 4644, 3440, 2290, 4000],
                    },
                  ],
                }}
              />
            </div>
            <div className="h-[48.8%] rounded-xl bg-black/30 shadow-3xl backdrop-blur-sm">
              g
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
