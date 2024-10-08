import PropTypes from "prop-types";
const SummaryCards = ({ cardInfo }) => {
  return (
    <div className="bg-gradient-to-br from-[#060B26] to-[#1A1F37] w-1/4 p-5 rounded-xl flex justify-between items-center">
      <div>
        <p className="text-slate-500 font-semibold">{cardInfo.title}</p>
        <p className="flex gap-2 items-center font-bold">
          <h1 className="text-2xl">{cardInfo.amount}</h1>{" "}
          <span className="text-[#01B574]">{cardInfo.update}</span>
        </p>
      </div>
      <div className="bg-blue-500 h-10 w-10 flex items-center justify-center text-2xl rounded-xl">
        {cardInfo.icon}
      </div>
    </div>
  );
};

SummaryCards.propTypes = {
  cardInfo: PropTypes.object,
};

export default SummaryCards;
