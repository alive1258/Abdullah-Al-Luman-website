import HeroSection from "@/src/components/UI/HeroSection/HeroSection";
import AboutPreview from "@/src/components/UI/HomePage/AboutPreview/AboutPreview";
import CareerHighlights from "@/src/components/UI/HomePage/CareerHighlights/CareerHighlights";
import Contact from "@/src/components/UI/HomePage/Contact/Contact";
import EducationPreview from "@/src/components/UI/HomePage/EducationPreview/EducationPreview";
import RecentBlogPosts from "@/src/components/UI/HomePage/RecentBlogPosts/RecentBlogPosts";
import WhyWorkWithMe from "@/src/components/UI/WhyWorkWithMe/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutPreview />
      </section>
      <section id="career">
        <CareerHighlights />
      </section>
      <section id="education">
        <EducationPreview />
      </section>
      <section id="why-work">
        <WhyWorkWithMe />
      </section>
      <section id="blog">
        <RecentBlogPosts />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
