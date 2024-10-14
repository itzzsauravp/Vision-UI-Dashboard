import VerticalNav from "../components/Dashboard/VerticalNavigationBar/VerticalNav"
import DashboardDetails from "../components/Dashboard/DashboardDetailContents/DashboardDetails"
const DashboardPage = () => {
  return (
    <section className="min-h-screen bg-[#1c244b] flex overflow-hidden">
        <VerticalNav />
        <div className="ml-64">
        <DashboardDetails />
        </div>
    </section>
  )
}

export default DashboardPage