import PropTypes from "prop-types";
const SummaryCards = ({ cardInfo }) => {
  const { title, amount, update, icon } = cardInfo;
  return (
    <div className="bg-gradient-to-br from-[#060B26] to-[#1A1F37] w-1/4 p-5 rounded-xl flex justify-between items-center">
      <div>
        <p className="text-slate-500 font-semibold">{title}</p>
        <p className="flex gap-2 items-center font-bold">
          <h1 className="text-2xl">{amount}</h1>{" "}
          <span
            className={update !== "-14%" ? `text-[#01B574]` : ` text-red-700`}
          >
            {update}
          </span>
        </p>
      </div>
      <div className="bg-blue-500 h-10 w-10 flex items-center justify-center text-2xl rounded-xl">
        {icon}
      </div>
    </div>
  );
};

SummaryCards.propTypes = {
  cardInfo: PropTypes.object,
};

export default SummaryCards;
