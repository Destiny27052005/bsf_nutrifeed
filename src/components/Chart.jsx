import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { production } from "../data/mockData";


function Chart() {
    return (
            //  Chart container with title 
        <div className="rounded-lg border p-4 lg:col-span-2 bg-[#faf9f7] border-gray-300">
                <div className="mb-4">
                    <h2>Weekly Feed Production</h2>
                </div>
                <div>
                    {(
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={production} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 20% 85%)" />
                                <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(150 8% 45%)" />
                                <YAxis tick={{ fontSize: 12 }} stroke="hsl(150 8% 45%)" />
                                <Tooltip
                                    contentStyle={{
                                        background: "hsl(40 30% 98%)",
                                        border: "1px solid hsl(40 20% 85%)",
                                        borderRadius: "8px",
                                    }}
                                />
                                <Legend />
                                <Bar dataKey="produced" name="Produced (kg)" fill="hsl(142 50% 28%)" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="target" name="Target (kg)" fill="hsl(30 40% 50%)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </div>
        </div>
    );
}

export default Chart;