

function Footer() {
    return (
        <footer className="border-t  px-4 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-2 font-semibold">
                    <Leaf className="h-5 w-5" />
                    BSF-Nutrifeed · Otondo Team by DSHub
                </div>
                <p>Aligned with UN Sustainable Development Goal 3 — Health & Well-being for All</p>
            </div>
        </footer>
      );
}

export default Footer;