import AdventureSection from "@/pages/HomePages/AdventureSection";
import BlogSection from "@/pages/HomePages/BlogSection";
import Hero from "@/pages/HomePages/HeroSetion";
import Properties from "@/pages/HomePages/Properties";
import FollowUsSection from "@/pages/HomePages/FollowUsSection";
import HistorySection from "@/pages/HomePages/HistorySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Properties />
      <AdventureSection />
      <BlogSection />
      <FollowUsSection />
      <HistorySection />
    </>
  );
}
