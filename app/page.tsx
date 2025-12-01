import HeroSection from '@/components/sections/HeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import SolutionsOverviewSection from '@/components/sections/SolutionsOverviewSection';
import NewsSection from '@/components/sections/NewsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <SolutionsOverviewSection />
      <NewsSection />
      <CTASection />
    </div>
  );
}
