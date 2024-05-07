import React from "react";
import "./App.css";
import { Chart } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

function Dashboard() {
  return (
    <div className="h-screen bg-black">
      <div id="d1" className="h-screen">
        <div className="flex p-5 justify-between ">
          <div className="w-[30%] bg-black/60 h-[95vh] rounded-xl  ">g</div>
          <div className="w-[69%]  h-[95vh] rounded-xl flex flex-col justify-between">
            <div className="h-[48.8%]  rounded-xl bg-black/60 ">
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
                      labels: "BTC",
                      data: [
                        "50000",
                        "45000",
                        "48000",
                        "55000",
                        "61000",
                        "22000",
                        "35000",
                      ],
                    },
                    {
                      labels: "ETH",
                      data: [
                        "50000",
                        "45000",
                        "48000",
                        "55000",
                        "61000",
                        "2000",
                        "35000",
                      ],
                    },
                  ],
                }}
              />
            </div>
            <div className="h-[48.8%] rounded-xl bg-black/60 ">g</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
