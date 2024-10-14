import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
const MiniSummaryCard = ({ item }) => {
  const { title, currentValue, totalValue, icon } = item;
  return (
    <div className="w-[20%] ml-2 mr-2 space-y-2">
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 h-12 w-12 p-2 rounded-lg flex justify-center items-center">
          {icon}
        </div>
        <span className="text-slate-500">{title}</span>
      </div>
      <div>
        <span>{currentValue}</span>
        <ProgressBar totalValue = {totalValue} currentValue= {currentValue}/>
      </div>
    </div>
  );
};

MiniSummaryCard.propTypes = {
  item: PropTypes.object,
};

export default MiniSummaryCard;
