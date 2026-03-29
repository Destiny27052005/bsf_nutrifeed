import { Link } from "react-router-dom"
import { Leaf, ArrowRight } from "lucide-react";

function HeroSection() {
    return (
        <section className="relative overflow-hidden px-4 py-20 bg-[#246b3e]  md:py-32">
            <div className="absolute inset-0 opacity-10 bg-[#397950]">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full" />
                <div className="absolute -bottom-32 -left-32 h-125 w-125 rounded-full" />
            </div>
            <div className="relative mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm text-white ">
                    <Leaf className="h-4 w-4" /> Supporting UN SDG 3 — Health & Well-being
                </div>
                <h1 className="mb-6 text-4xl font-extrabold text-white leading-tight md:text-6xl">
                    Sustainable Poultry Feed,
                    <br />
                    <span className="text-[#82a145]">Powered by Nature</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300  md:text-xl">
                    BSF-Nutrifeed transforms Black Soldier Fly larvae into affordable, protein-rich poultry feed — empowering farmers and protecting the planet.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="text-base font-semibold bg-[#b3804d] text-white px-6 py-3 rounded-md hover:bg-[#a06e45] transition-colors duration-300">
                        <Link to="/dashboard" className="flex place-items-center">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </button>
                    <button className="text-base font-semibold border border-white text-white px-6 py-3 rounded-md hover:bg-[#a06e45] hover:border-0 transition-colors duration-300">
                        <a href="#benefits" className="flex place-items-center">Learn More <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;