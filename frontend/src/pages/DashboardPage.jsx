import VerticalNav from "../components/Dashboard/VerticalNavigationBar/VerticalNav"
import DashboardDetails from "../components/Dashboard/DashboardDetailContents/DashboardDetails"
const DashboardPage = () => {
  return (
    <section className="h-screen overflow-hidden bg-[#1c244b] flex ">
        <VerticalNav />
        <DashboardDetails />
    </section>
  )
}

export default DashboardPage