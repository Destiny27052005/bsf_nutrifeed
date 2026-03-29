import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className=" px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Farm?</h2>
                <p className="mb-8 text-lg">
                    Start tracking your feed production and join the sustainable farming movement today.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="text-base font-semibold">
                        <Link to="/add-data">Add Farm Data</Link>
                    </button>
                    <button className="text-base">
                        <Link to="/dashboard">View Dashboard</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTA;