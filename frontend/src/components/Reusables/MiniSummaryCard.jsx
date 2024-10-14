import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
const MiniSummaryCard = ({ item }) => {
  const { title, currentValue, totalValue, icon } = item;
  // let progress;
  // if (title == "Users") {
  //   newCurrentValue = Array.from(currentValue)
  //     .filter((elem) => elem != ",")
  //     .join("");
  //   progress = (newCurrentValue / totalValue) * 100;
  // } else {
  //   progress = (currentValue / totalValue) * 100;
  // }
  return (
    <div className="w-full ml-2 mr-2 space-y-2">
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
