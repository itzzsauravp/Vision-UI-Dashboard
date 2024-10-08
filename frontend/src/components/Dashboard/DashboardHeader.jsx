import { FaGear } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";
const DashboardHeader = ({ pageName }) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <span className="text-slate-500">Page</span> /{" "}
        <span className="font-semibold">{pageName}</span>
        <h1 className="text-[1.1rem] font-semibold mt-1">{pageName}</h1>
      </div>
      <div className="flex gap-5 mt-0">
        <div className="flex items-center gap-2 border-[1px] px-3 py-2 rounded-xl border-slate-500">
          <CiSearch className="text-slate-500" />
          <input
            type="text"
            placeholder="Type here..."
            className="border-none outline-none bg-transparent text-[0.8rem] text-slate-500"
          />
        </div>

        <button className="flex items-center gap-1 text-slate-500 text-[0.9rem]">
          <FaUser /> Sign In
        </button>
        <button className=" text-slate-500 text-[0.9rem]">
          <FaGear />
        </button>
        <button className=" text-slate-500 text-[0.9rem]">
          <FaBell />
        </button>
      </div>
    </div>
  );
};

DashboardHeader.propTypes = {
  pageName: PropTypes.string,
};

export default DashboardHeader;
