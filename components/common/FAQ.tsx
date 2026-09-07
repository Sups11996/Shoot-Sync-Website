"use client";

import { useState } from "react";
import { ChevronDown, TableOfContents } from "lucide-react";
import PillBadge from "./PillBadge";
import MainHeading from "./MainHeading";
import useApi from "@/hooks/useApi";
import { api } from "@/services/api/faq";
import { Skeleton } from "@/components/common/Skeleton";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

function FaqSkeleton() {
  return (
    <div className="w-full min-[1200px]:px-32 flex flex-col gap-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-neutral-200 bg-white px-4 py-4 sm:px-6 sm:py-5"
        >
          <div className="flex items-center justify-between gap-4">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-4 shrink-0 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const { data: faqData, loading, error, refetch } = useApi(api.getFaqs);

  const faqs = faqData?.data ?? [];

  const handleRetry = () => {
    if (typeof refetch === "function") {
      refetch();
    } else {
      window.location.reload();
    }
  };

  return (
    <section className="w-full bg-white mt-8">
      <div className="px-5 sm:px-10 lg:px-16 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-3 items-center text-center">
          <PillBadge text="Frequently Asked Questions" />

          <MainHeading
            text="Got Questions? We've Got Answers."
            green="We've Got Answers."
          />

          <p className="leading-relaxed text-[#475569]">
            Find clear answers to everything about planning, managing, and
            delivering your shoots.
          </p>
        </div>

        {loading ? (
          <FaqSkeleton />
        ) : error ? (
          <ErrorState
            title="Couldn't load FAQs"
            message="Something went wrong while fetching the FAQs. Please try again."
            onRetry={handleRetry}
            className="min-[1200px]:mx-32"
          />
        ) : faqs.length === 0 ? (
          <EmptyState
            title="No FAQs available"
            message="Check back later for frequently asked questions."
            className="min-[1200px]:mx-32"
            icon={TableOfContents}
          />
        ) : (
          <div className="w-full min-[1200px]:px-32 flex flex-col gap-3">
            {faqs.map(
              (faq: { question: string; answer: string }, index: number) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="font-medium text-[#0f172a]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        className={`mt-0.5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-200 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 leading-relaxed font-light text-[#475569] sm:px-6 sm:pb-5">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        )}
      </div>
    </section>
  );
}
