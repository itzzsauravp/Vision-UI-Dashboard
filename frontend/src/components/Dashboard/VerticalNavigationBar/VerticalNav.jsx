import { IoHome } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdNote } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import docsCard from "../../../assets/images/docsCard.png";
import { FaQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";
const VerticalNav = () => {
  return (
    <div className="w-64 h-[1000px] rounded-xl mt-2 ml-2 bg-gradient-to-r from-[#060B26] to-[#1A1F37] text-white fixed">
      <h1 className="uppercase text-center mt-5">I love you 2</h1>
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-5"></div>
      <div className="flex flex-col justify-between m-5 h-full relative">
        <div>
          <ul className="space-y-2">
            <li className="bg-[#21263f] p-2 rounded-lg flex items-center gap-3">
              <IoHome className=" bg-blue-600 h-8 w-8 p-2 rounded-xl" />
              <p>Dashboard</p>
            </li>
            <li className="p-2 rounded-lg flex items-center gap-3 hover:bg-[#21263f] duration-[0.2s]">
              <FaChartSimple className="text-white bg-[#1A1F37] h-8 w-8 p-2 rounded-xl" />
              <p>Tables</p>
            </li>
            <li className="p-2 rounded-lg flex items-center gap-3 hover:bg-[#21263f] duration-[0.2s]">
              <IoCard className=" bg-[#1A1F37] h-8 w-8 p-2 rounded-xl" />
              <p>Billing</p>
            </li>
            <li className="uppercase p-2 rounded-lg flex items-center gap-3 hover:bg-[#21263f] duration-[0.2s]">
              <FaWrench className="bg-[#1A1F37] h-8 w-8 p-2 rounded-xl" />
              <p>rtl</p>
            </li>
          </ul>
          <p className="ml-2 mt-5 font-bold">Account Page</p>
          <ul className="mt-5 space-y-2">
            <li className="p-2 rounded-lg flex items-center gap-3 hover:bg-[#21263f] duration-[0.2s]">
              <FaUser className="   bg-[#1A1F37] h-8 w-8 p-2 rounded-xl" />
              <p>Profile</p>
            </li>
            <li className="p-2 rounded-lg flex items-center gap-3 hover:bg-[#21263f] duration-[0.2s]">
              <MdNote className="bg-[#1A1F37] h-8 w-8 p-2 rounded-xl" />
              <Link to="/">Sign Up</Link>
            </li>
            <li className="p-2 rounded-lg flex items-center gap-3 text-white hover:bg-[#21263f] duration-[0.2s]">
              <IoIosRocket className="bg-[#1A1F37] h-8 w-8 p-2 rounded-xl" />
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
        <div
          className="absolute bottom-28  h-[170px] w-[220px] rounded-xl"
          style={{
            backgroundImage: `url(${docsCard})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="ml-5 mt-3 mr-5">
            <div className="h-12 w-12 bg-white flex justify-center items-center rounded-xl">
              <FaQuestion className="bg-blue-500 h-[60%] w-[60%] p-2 rounded-full" />
            </div>
            <h1 className="mt-2 font-bold">Need Help?</h1>
            <p className="text-slate-400 text-[0.85rem]">
              Please check our docs
            </p>
            <button className="bg-black w-full mt-2 py-2 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-[60%] border-none text-[0.8rem]">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalNav;
