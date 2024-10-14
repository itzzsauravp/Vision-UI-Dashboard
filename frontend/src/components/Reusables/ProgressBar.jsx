import PropTypes from "prop-types";
const ProgressBar = ({ currentValue, totalValue }) => {
  const progress = (currentValue / totalValue) * 100;
  return (
    <div className="relative w-full bg-slate-800 h-[5px] rounded-full">
      <div
        className="absolute bg-blue-600 h-[5px] top-0 rounded-full"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  totalValue: PropTypes.number,
  currentValue: PropTypes.number,
};

export default ProgressBar;
