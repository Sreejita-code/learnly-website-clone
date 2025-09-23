import HeroSection from "@/components/sections/hero-section";
import PartnersSection from "@/components/sections/partners-section";
import FeaturedCoursesSection from "@/components/sections/featured-courses-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import NewCoursesSection from "@/components/sections/new-courses-section";
import LearningProcessSection from "@/components/sections/learning-process-section";
import GrowthStatsSection from "@/components/sections/growth-stats-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CtaSection from "@/components/sections/cta-section";
import FooterSection from "@/components/sections/footer-section";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturedCoursesSection />
      <WhyChooseSection />
      <NewCoursesSection />
      <LearningProcessSection />
      <GrowthStatsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}