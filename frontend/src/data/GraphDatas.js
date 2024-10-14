const LineGraphData = {
  // this is in x-axis
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    // this is in y-axis one single data
    {
      data: [500, 150, 200, 250, 200, 220, 210, 200, 100, 150, 290, 120],
      borderColor: "#0075FF",
      pointRadius: 0,
      tension: 0.4,
    },
    {
      data: [190, 230, 205, 350, 350, 450, 320, 300, 310, 210, 360, 420],
      borderColor: "#2CD9FF",
      pointRadius: 0,
      tension: 0.4,
    },
  ],
};

const BarGraphData = {
  labels: ["", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      data: [300, 200, 100, 290, 500, 400, 450, 200, 150],
      backgroundColor: "white",
      barThickness: 10,
    },
  ],
};

export { LineGraphData, BarGraphData };
