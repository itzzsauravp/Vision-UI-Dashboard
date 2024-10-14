import PropTypes from "prop-types";
import { MdEmojiEmotions } from "react-icons/md";
const SatisfactionLevelCard = ({ percentage }) => {
  const radius = 100; // Radius for the circular SVG
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 p-6 rounded-2xl w-[500px] h-[400px] text-white">
      <h3 className="text-2xl font-semibold mb-1">Satisfaction Rate</h3>
      <p className="text-sm text-gray-400 mb-4 font-semibold">From all projects</p>
      <div className="flex flex-col items-center relative h-[300px]">
        <div className="w-60 h-60 flex items-center justify-center mt-5">
          <svg
            className="w-full h-full transform rotate-[30deg]"
            width="200"
            height="200"
          >
            {/* Background Circle */}
            <circle
              // cx and cy defines the center of the circle in each axis
              cx="120"
              cy="120"
              r={radius}
              // store is like the border of the circle
              stroke="rgba(255, 255, 255, 0.1)"
              // this is the border thickness
              strokeWidth="20"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              stroke="#3b82f6"
              strokeWidth="20"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-500"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center">
            <span className="text-3xl">
              <MdEmojiEmotions />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between px-4 bg-gradient-to-br from-[#060B28] to-[#0A0E23] p-5 rounded-xl absolute w-80 bottom-5">
          <p className="mt-[-10px]">0%</p>
          <div className="flex flex-col items-center justify-center ml-7">
              <h1 className="text-3xl font-bold">{percentage}%</h1>
              <p>Based on likes</p>
          </div>
          <p className="mt-[-10px]">100%</p>
        </div>
      </div>
    </div>
  );
};

SatisfactionLevelCard.propTypes = {
  percentage: PropTypes.number,
};

export default SatisfactionLevelCard;
