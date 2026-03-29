import { Package, Layers, Bird, TrendingDown } from "lucide-react";

const iconMap = {
  package: Package,
  layers: Layers,
  bird: Bird,
  "trending-down": TrendingDown,
};

export default function MetricCard({ metric }) {
  const Icon = iconMap[metric.icon] || Package;

  return (
    <div className="border-border/60">
      <div className="flex items-center gap-4 p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-sm">{metric.label}</p>
          <p className="text-2xl font-bold">{metric.value}</p>
          <span className="text-xs font-medium">{metric.change} this month</span>
        </div>
      </div>
    </div>
  );
}