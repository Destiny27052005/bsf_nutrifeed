import Chart from "../components/Chart";
import MetricCard from "../components/MetricCard";

 const metrics = [
  { label: "Total Feed Produced", value: "1,240 kg", change: "+12%", trend: "up", icon: "package" },
  { label: "Active Batches", value: "8", change: "+2", trend: "up", icon: "layers" },
  { label: "Flock Size", value: "350", change: "+25", trend: "up", icon: "bird" },
  { label: "Cost Savings", value: "$420", change: "+18%", trend: "up", icon: "trending-down" },
];

function Dashboard() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-2 text-3xl font-bold">Production Dashboard</h1>
            <p className="mb-8">Overview of your BSF-Nutrifeed production metrics.</p>
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics?.map((m) => <MetricCard key={m.label} metric={m} />)}
            </div>
            <Chart />
        </div>

    );
}

export default Dashboard;