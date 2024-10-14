import { orderOverview } from "../../../data/ProjectsData";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import PropTypes from "prop-types";
const OrderOverview = ({ value }) => {
  return (
    <div className="bg-[#060B28] p-7 w-[35%] rounded-xl">
      <h1 className="text-2xl font-bold">Orders overview</h1>
      <p className="flex items-center gap-1 mt-2">
        <span className="text-green-500 text-[1.2rem]">
          <IoCheckmarkDoneCircle />
        </span>
        <span className="text-slate-500 font-bold">+{value}% this month</span>
      </p>
      <div className="flex flex-col gap-5 mt-4">
        {orderOverview.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="h-fit w-fit  mt-[5px]">
              <img src={item.logo} alt=""/>
            </div>
            <div>
              <h1>{item.detail}</h1>
              <span className="text-slate-500 font-semibold">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

OrderOverview.propTypes = {
  value: PropTypes.number,
};

export default OrderOverview;
