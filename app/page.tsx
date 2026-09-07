"use client";

import Faq from "@/components/common/FAQ";
import Hero from "./components/Hero";
import Features from "./components/features/Features";
import PricingSection from "./components/plans/PricingSection";
import BlogSection from "./components/BlogSection";
import Testimonials from "@/components/common/CreationTeam";
import CtaBanner from "@/components/common/CtaSection";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <>
      <main className="mt-24 mb-11 flex flex-col">
        <div className="flex flex-col gap-15">
          <Hero />
          <ProductSection />
          <Features />

          <div className="mt-5">
            <Testimonials />
          </div>

          <PricingSection />

          <BlogSection />

          <div className="flex flex-col gap-25">
            <Faq />

            <div className="px-5 sm:px-10 lg:px-16">
              <CtaBanner />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}