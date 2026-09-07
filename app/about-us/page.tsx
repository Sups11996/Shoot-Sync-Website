import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import CoreSolution from "./components/CoreSolution";
import Testimonial from "../../components/common/CreationTeam";
import Faq from "../../components/common/FAQ";
import CtaSection from "../../components/common/CtaSection";

export default function AboutUs() {
  return (
    <main className=" mb-11 flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <HeroSection />
        <Container />
        <OurStory />
        <CoreSolution />
          <Testimonial />
        <div className="flex flex-col gap-20">
          <Faq />
          <div className="px-5 sm:px-10 lg:px-16">
          <CtaSection />
          </div>
        </div>
      </div>
    </main>
  );
}
