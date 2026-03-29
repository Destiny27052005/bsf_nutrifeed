import AlertItemCard from "./AlertItemCard";
const alerts = [
  { id: "1", message: "Batch #12 is ready for harvest", type: "success", time: "2 hours ago" },
  { id: "2", message: "Larvae stock running low — reorder soon", type: "warning", time: "5 hours ago" },
  { id: "3", message: "Weekly production report available", type: "info", time: "1 day ago" },
];

function AlertCard() {
  return (
    <div className="bg-[#faf9f7] rounded border border-gray-300 px-2 py-4">
      <div>
        <h3 className="my-3">Alerts & Notifications</h3>
      </div>
      <div className="space-y-3">
        {alerts.map((a) => <AlertItemCard key={a.id} alert={a} />)}
      </div>
    </div>
  );
}

export default AlertCard;