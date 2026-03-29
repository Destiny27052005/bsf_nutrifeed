import AlertItemCard from "./AlertItemCard";
import { alerts } from "../data/mockData";

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