import PricingHero from "./components/PricingHero";
import PricingSection from "../components/plans/PricingSection";
import FAQ from "../../components/common/FAQ";
import CtaSection from "../../components/common/CtaSection";

export default function PricingPage() {
  return (
    <main className="mb-9 flex flex-col gap-0">
      <div className="flex flex-col">
        <PricingHero />
        <PricingSection showHeader={false}/>
      </div>
      <FAQ />
      <div className="mt-22 px-5 sm:px-10 lg:px-16">
        <div className="q">
          <CtaSection />
        </div>
      </div>
    </main>
  );
}
