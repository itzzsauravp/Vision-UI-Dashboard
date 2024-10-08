import jellyFish from "../../../assets/images/jellyFish.png";
import { FaArrowRight } from "react-icons/fa";
const ProfileCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${jellyFish})`,
        backgroundRepeat: `no-repeat`,
      }}
      className="rounded-xl bg-cover h-[400px] w-[1000px] relative z-[0]"
    >
      <div className="rounded-xl relative overflow-hidden h-full p-10 flex flex-col justify-between">
        <div className="">
          <p className="text-[0.9rem] text-slate-500 font-semibold">Welcome back,</p>
          <h1 className="text-2xl font-bold">Saurav Parajulee</h1>

          <p className="mt-5 text-slate-500">
            Glad to see you again! <br /> Ask me anything.
          </p>
        </div>
        <button className="w-fit flex items-center gap-2 text-[0.85rem]">
          <p>Tap to record</p>
          <FaArrowRight />
        </button>
        <div className="bg-[#050e2d] h-96 w-96 rounded-full blur-3xl absolute top-[-100px] left-[-100px] z-[-1]"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
