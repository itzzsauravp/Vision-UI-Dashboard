import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import ImageStack from "../../Reusables/ImageStack";
import { projectData } from "../../../data/ProjectsData";
import ProgressBar from "../../Reusables/ProgressBar";
import PropTypes from "prop-types";
const ProjectDetails = ({ value }) => {
  return (
    <div className="bg-[#0A0E23] p-7 w-[65%] rounded-xl">
      <div className="flex  justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="flex items-center gap-1 mt-2">
            <span className="text-green-500 text-[1.2rem]">
              <IoCheckmarkDoneCircle />
            </span>
            <span className="text-slate-500 font-bold">
              {value} done this month
            </span>
          </p>
        </div>
        <div>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[2fr,1fr,1fr,1fr] mt-7 p-2 text-slate-500 uppercase font-semibold">
        <div className="grid-">Companies</div>
        <div>Members</div>
        <div>Budget</div>
        <div>Completion</div>
      </div>
      {projectData.map((item, index) => (
        <div
          className="grid grid-cols-[2fr,1fr,1fr,1fr] border-t-2 border-slate-800 mb-4 p-2"
          key={index}
        >
          <div className="flex items-center gap-4">
            <img src={item.logo} alt={item.alt} className="h-6 w-6" />
            <span className="font-semibold">{item.name}</span>
          </div>
          <div>
            <span>
              <ImageStack members={item.members} />
            </span>
          </div>
          <div className="font-bold">
            {item.budget !== "NOT SET" ? (
              <span>${item.budget}</span>
            ) : (
              "NOT SET"
            )}
          </div>
          <div className="w-[50%]">
            <span>{item.completion}%</span>
            <ProgressBar currentValue={item.completion} totalValue={100} />
          </div>
        </div>
      ))}
    </div>
  );
};

ProjectDetails.propTypes = {
  value: PropTypes.number,
};

export default ProjectDetails;
