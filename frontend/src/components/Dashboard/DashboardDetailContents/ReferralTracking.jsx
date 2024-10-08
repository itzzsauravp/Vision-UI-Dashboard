import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
const ReferralTracking = ({ value }) => {
  return (
    <div className="bg-gradient-to-tl from-[#060B28] to-[#1d2653] rounded-xl w-[900px] h-[400px]">
      <div className="flex justify-between items-center m-5">
        <h1 className="font-bold">Referral Tracking</h1>
        <div className="rounded-xl bg-[#1b2644] h-10 w-10 flex justify-center items-center">
          <div className=" mt-[-18px] text-3xl text-purple-600">...</div>
        </div>
      </div>
      <div className="flex justify-between m-8">
        <div className="flex flex-col w-full gap-7">
          <div className="bg-gradient-to-r from-[#060C29] to-[#040C30] rounded-2xl w-[60%] p-1">
            <div className="m-4">
              <span className="text-slate-500">Invited</span>
              <p>145 people</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#060C29] to-[#040C30] rounded-2xl w-[60%] p-1">
            <div className="m-4">
              <span className="text-slate-500">Bonus</span>
              <p>1,465</p>
            </div>
          </div>
        </div>
        <div className="h-96 w-96">
          <CircularProgressbarWithChildren
            value={value}
            maxValue={10}
            counterClockwise={true}
            styles={buildStyles({
              pathColor: `#05CD99`,
            })}
          >
            <div className="flex flex-col items-center">
              <span className="text-slate-500">Safety</span>
              <h1 className="text-7xl font-bold">{value}</h1>
              <span className="text-slate-500">Total Score</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

ReferralTracking.propTypes = {
  value: PropTypes.number,
};

export default ReferralTracking;
