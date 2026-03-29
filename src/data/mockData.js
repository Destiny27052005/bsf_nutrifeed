export const dashboardMetrics = [
    { label: "Total Feed Produced", value: "1,240 kg", change: "+12%", trend: "up", icon: "package" },
    { label: "Active Batches", value: "8", change: "+2", trend: "up", icon: "layers" },
    { label: "Flock Size", value: "350", change: "+25", trend: "up", icon: "bird" },
    { label: "Cost Savings", value: "$420", change: "+18%", trend: "up", icon: "trending-down" },
];

export const weeklyProduction= [
    { week: "Week 1", produced: 140, target: 160 },
    { week: "Week 2", produced: 165, target: 160 },
    { week: "Week 3", produced: 180, target: 180 },
    { week: "Week 4", produced: 155, target: 180 },
    { week: "Week 5", produced: 200, target: 200 },
    { week: "Week 6", produced: 210, target: 200 },
    { week: "Week 7", produced: 190, target: 200 },
];

export const alerts =[
    { id: "1", message: "Batch #12 is ready for harvest", type: "success", time: "2 hours ago" },
    { id: "2", message: "Larvae stock running low — reorder soon", type: "warning", time: "5 hours ago" },
    { id: "3", message: "Weekly production report available", type: "info", time: "1 day ago" },
];

export const feedTypes = [
    "BSF Larvae Meal",
    "BSF Larvae + Maize Bran",
    "BSF Larvae + Soybean Mix",
    "BSF Larvae + Fish Meal Blend",
];