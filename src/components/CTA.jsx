import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className=" px-4 py-16 md:py-24 bg-[#246b3e]">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">Ready to Transform Your Farm?</h2>
                <p className="mb-8 text-lg text-gray-300">
                    Start tracking your feed production and join the sustainable farming movement today.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="text-base font-semibold bg-[#b3804d] text-white px-6 py-3 rounded-md hover:bg-[#a06e45] transition-colors duration-300">
                        <Link to="/add-data">Add Farm Data</Link>
                    </button>
                    <button className="text-base font-semibold border border-white text-white px-6 py-3 rounded-md hover:bg-[#a06e45] hover:border-0 transition-colors duration-300">
                        <Link to="/dashboard">View Dashboard</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTA;