import AlertCard from "../components/AlertCard";
import Chart from "../components/Chart";
import MetricCard from "../components/MetricCard";
import { metrics } from "../data/mockData";

function Dashboard() {
    return (
        <div className=" px-4 py-8 bg-[#f8f6f1]">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-2 text-3xl font-bold">Production Dashboard</h1>
                <p className="mb-8 text-gray-500">Overview of your BSF-Nutrifeed production metrics.</p>
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics?.map((m) => <MetricCard key={m.label} metric={m} />)}
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    <Chart />
                    <AlertCard />
                </div>
            </div>
        </div>

    );
}

export default Dashboard;