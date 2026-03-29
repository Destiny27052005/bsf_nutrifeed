import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";
import Product from "../components/Product";
import Work from "../components/Work";

function Home() {
    return (
        <div>
            <HeroSection />
            <Product />
            <Benefits />
            <Work />
            <CTA />
        </div>
    );
}

export default Home;