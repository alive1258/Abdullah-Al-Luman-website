import HeroSection from "@/src/components/UI/HeroSection/HeroSection";
import AboutPreview from "@/src/components/UI/HomePage/AboutPreview/AboutPreview";
import CareerHighlights from "@/src/components/UI/HomePage/CareerHighlights/CareerHighlights";
import EducationPreview from "@/src/components/UI/HomePage/EducationPreview/EducationPreview";
import RecentBlogPosts from "@/src/components/UI/HomePage/RecentBlogPosts/RecentBlogPosts";
import WhyWorkWithMe from "@/src/components/UI/WhyWorkWithMe/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <CareerHighlights />
      <EducationPreview />
      {/* <StatisticsShowcase /> */}
      <WhyWorkWithMe />
      <RecentBlogPosts />
    </>
  );
}
