import { useState } from "react";
import PropTypes from "prop-types";
const ToggleSwitch = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => setIsChecked(!isChecked);

  return (
    <div className="flex items-center space-x-2 mt-4">
      <div
        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
          isChecked ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md duration-300 ease-in-out ${
            isChecked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
      <span className="text-sm font-semibold text-white">{label}</span>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string,
};

export default ToggleSwitch;
