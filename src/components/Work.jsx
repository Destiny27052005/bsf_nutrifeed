
import { Bug, Factory, Egg } from "lucide-react";

const steps = [
    { icon: Bug, title: "Collect Larvae", description: "Harvest Black Soldier Fly larvae from organic waste substrates." },
    { icon: Factory, title: "Process Feed", description: "Dry and blend larvae into balanced, nutrient-rich poultry feed." },
    { icon: Egg, title: "Feed Poultry", description: "Deliver affordable, high-quality feed to boost farm productivity." },
];

function Work() {
    return (
        <section className="px-4 py-16 md:py-24 bg-[#f8f6f1]">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
                <div className="grid gap-8 sm:grid-cols-3">
                    {steps.map((s, i) => (
                        <div key={s.title} className="relative text-center bg-white rounded-lg p-6 shadow-md">
                            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#246b3e] text-white">
                                <s.icon className="h-9 w-9" />
                            </div>
                            <span className="mb-2 block text-sm font-bold">Step {i + 1}</span>
                            <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                            <p className="text-sm text-gray-500">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;