
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

function AlertItemCard({ alert }) {
    let Icon;
    let color;

    switch (alert.type) {
        case "success":
            Icon = CheckCircle2;
            color = "text-green-500";
            break;
        case "warning":
            Icon = AlertTriangle;
            color = "text-yellow-500";
            break;
        case "info":
            Icon = Info;
            color = "text-blue-500";
            break;
        default:
            Icon = Info;
            color = "text-gray-500";
    }

    return (
        <div className="flex items-start gap-3 rounded-lg border p-3">
            <Icon className={`${color} shrink-0`} />
            <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
            </div>
        </div>
    );
}

export default AlertItemCard;