import ServiceCards from "@/components/services/Cards";
import HeroSection from "@/components/hero/Hero";
import Testimonials from "@/components/trust/Testimonials";

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <Testimonials />
      <ServiceCards />
    </div>
  );
}
