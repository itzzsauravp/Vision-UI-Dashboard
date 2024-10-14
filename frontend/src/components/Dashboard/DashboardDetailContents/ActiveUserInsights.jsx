import MiniSummaryCard from "../../Reusables/MiniSummaryCard";
import { IoIosRocket } from "react-icons/io";
import { FaWallet, FaShoppingCart, FaWrench } from "react-icons/fa";
import BarGraph from "../Charts/BarGraph";

const ActiveUserInsights = () => {
  const miniSummaryCardsInfo = [
    {
      icon: <FaWallet />,
      title: "Users",
      // please consider the , later here ThankYou!!!
      currentValue: "32984",
      totalValue: "40000",
    },
    {
      icon: <IoIosRocket />,
      title: "Clicks",
      currentValue: "2.42",
      totalValue: "5",
    },
    {
      icon: <FaShoppingCart />,
      title: "Sales",
      currentValue: "2400",
      totalValue: "5000",
    },
    {
      icon: <FaWrench />,
      title: "Items",
      currentValue: "320",
      totalValue: "500",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-[#1c213b] to-[#01022b] text-white h-[600px] w-[40%] rounded-xl">
      <div className="p-12 flex flex-col justify-between gap-7 h-full">
        <div className="h-[70%] w-full">
          <BarGraph />
        </div>
        <div className="flex flex-col justify-between h-[300px]">
          <div className="">
            <h1 className="font-semibold text-2xl mt-5">Active Users</h1>
            <div className="flex gap-2">
              <span className="text-[#01B574] font-bold">+(23)</span>{" "}
              <p>than last week</p>
            </div>
          </div>
          <div className="flex justify-between">
            {miniSummaryCardsInfo.map((item, index) => (
              <MiniSummaryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUserInsights;
