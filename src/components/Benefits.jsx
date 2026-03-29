import { DollarSign, Recycle, Drumstick } from "lucide-react";


const benefits = [
    {
        icon: DollarSign,
        title: "Affordable",
        description: "Up to 40% cheaper than conventional poultry feed, making quality nutrition accessible to every farmer.",
    },
    {
        icon: Recycle,
        title: "Sustainable",
        description: "BSF larvae convert organic waste into protein-rich feed, reducing environmental impact and carbon footprint.",
    },
    {
        icon: Drumstick,
        title: "Nutritious",
        description: "High protein, essential amino acids, and healthy fats that boost poultry growth and egg production.",
    },
];

function Benefits() {
    return (
        <section id="benefits" className="px-4 bg-[#f2f0e9] py-16 md:py-24">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Key Benefits</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((b) => (
                        <div key={b.title} className=" transition-shadow hover:shadow-lg bg-white rounded-2xl">
                            <div className="p-8 text-center">
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6ede6] text-white">
                                    <b.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">{b.title}</h3>
                                <p className="text-muted-foreground">{b.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;