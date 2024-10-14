import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { LineGraphData } from "../../../data/GraphDatas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const option = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: true,
          color: "#64748B",
        },
        border: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#0e132b] to-[#22284b] h-[600px] w-[60%] rounded-xl p-2">
      <div className="m-7">
        <h1 className="font-bold text-2xl">Sales overview</h1>
        <span className="text-[#01B574] font-semibold">(+5) more </span>
        <span className="text-slate-500">in 2021</span>
      </div>
      <div className="h-[450px] w-[full] ml-7">
        <Line options={option} data={LineGraphData}></Line>
      </div>
    </div>
  );
};

export default LineGraph;
