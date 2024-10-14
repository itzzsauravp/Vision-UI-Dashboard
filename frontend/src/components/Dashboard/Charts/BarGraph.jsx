import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarGraphData } from "../../../data/GraphDatas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend 
);

const BarGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
          padding: 10,
        },
        // dont see any diff with this on and off
        // min: 0,
        // max: 500,
        // stepSize: 50,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 100,
        borderSkipped: false,
      },
    },
  };

  return (
    <div className="h-[100%] w-[100%] rounded-xl bg-[#060C29]">
      <Bar data={BarGraphData} options={options} />
    </div>
  );
};

export default BarGraph;
