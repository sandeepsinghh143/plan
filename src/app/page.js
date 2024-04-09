import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Overview from "@/components/Overview";
import Pricing from "@/components/Pricing";
import RealTime from "@/components/RealTime";
import Screenshots from "@/components/Screenshots";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection/>
      <RealTime/>
      <Features/>
      <Works/>
      <Screenshots/>
      <Overview/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
