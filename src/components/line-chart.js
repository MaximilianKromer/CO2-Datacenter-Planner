import * as React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = ({ dataArray, title, label }) => {
  const data = {
    labels: ["0 Uhr", "1 Uhr", "2 Uhr", "3 Uhr", "4 Uhr", "5 Uhr", "6 Uhr", "7 Uhr", "8 Uhr", "9 Uhr", "10 Uhr", "11 Uhr", "12 Uhr", "13 Uhr", "14 Uhr", "15 Uhr", "16 Uhr", "17 Uhr", "18 Uhr", "19 Uhr", "20 Uhr", "21 Uhr", "22 Uhr", "23 Uhr"],
    datasets: [
      {
        label: label,
        fill: {
          target: "origin",
          below: "rgb(255, 99, 132)",
        },
        data: dataArray,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 4,
        pointHitRadius: 25, // for improved touch support
        pointBorderColor: "rgb(110, 160, 256)",
        pointBackgroundColor: "rgb(110, 160, 256)",
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        //max: 100,
        min: 0,
      },
    },
  };


  const options2 = {
    tooltips: { enabled: true },
      scales: {
        xAxes: [
          {
            gridLines: { display: false, color: "grey" },
            ticks: { fontColor: "#3C3C3C", fontSize: 14 }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Color Strength",
              fontSize: 14
            },
            ticks: {
              display: true,
              min: -5,
              max: 100,
              scaleSteps: 50,
              scaleStartValue: -50,
              maxTicksLimit: 4,
              fontColor: "#9B9B9B",
              padding: 30,
              callback: point => (point < 0 ? "" : point)
            },
            gridLines: {
              display: false,
              offsetGridLines: true,
              color: "3C3C3C",
              tickMarkLength: 4
            }
          }
        ]
      },
      legend: {
        display: true
      },
    }

  return <Line data={data} options={options} />;
};

export default LineChart;
