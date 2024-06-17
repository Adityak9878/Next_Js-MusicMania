import Instructors from "@/components/AnimatedTip";
import FeaturedSections from "@/components/FeaturedSections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MovingCards from "@/components/MovingCards";
import StickyScrollMenu from "@/components/StickyScrollMenu";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Hero />
    <FeaturedSections />
    <StickyScrollMenu/>
    <MovingCards/>
    <UpcomingWebinars />
    <Instructors />
    <Footer/>
    </main>
  );
}
