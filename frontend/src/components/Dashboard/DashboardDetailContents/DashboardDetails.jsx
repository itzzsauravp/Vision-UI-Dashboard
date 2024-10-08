import DashboardHeader from "../DashboardHeader";
import SummaryCards from "./SummaryCards";
import ProfileCard from "./ProfileCard";
import { FaWallet } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import SatisfactionLevelCard from "./SatisfactionLevelCard";
import ReferralTracking from "./ReferralTracking";
const DashboardDetails = () => {
  const summaryCardsInfo = [
    {
      title: "Today's Money",
      amount: "53,000",
      update: "+55%",
      icon: <FaWallet />,
    },
    {
      title: "Today's User",
      amount: "2,300",
      update: "+5%",
      icon: <FaGlobe />,
    },
    {
      title: "New Clients ",
      amount: "3,052",
      update: "-14%",
      icon: <PiNotebookBold />,
    },
    {
      title: "Today's Sales   ",
      amount: "173,000",
      update: "+8%",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <section
      className="m-7 text-white"
      style={{
        width: `calc(100% - 350px)`,
      }}
    >
      <DashboardHeader pageName="Dashboard" />
      <div className="mt-7 flex justify-evenly gap-7">
        {summaryCardsInfo.map((info, index) => (
          <SummaryCards key={index} cardInfo={info} />
        ))}
      </div>
      <div className="mt-5 flex gap-5 w-full">
        <ProfileCard />
        <SatisfactionLevelCard percentage={65}/>
        <ReferralTracking value={9.3}/>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default DashboardDetails;
