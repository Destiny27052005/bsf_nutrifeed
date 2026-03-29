import { Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/add-data", label: "Add Data" },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = window.location.pathname;
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-300 bg-[#f7f5f1] backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                    <Leaf className="h-6 w-6" />
                    BSF-Nutrifeed
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${pathname === l.to ? "bg-muted" : ""
                                }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-t px-4 pb-4 md:hidden">
                    {navLinks.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted"
                                }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;