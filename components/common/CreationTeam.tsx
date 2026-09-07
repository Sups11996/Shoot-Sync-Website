"use client";

import { useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useApi } from "@/hooks/useApi";
import { testimonialApi } from "@/services/api/testimonial";
import PillBadge from "@/components/common/PillBadge";
import { resolveImage } from "@/app/blogs/[slug]/components/utils";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    data: testimonials,
    loading,
    error,
  } = useApi(testimonialApi.getTestimonials);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    if (!card) return;
    el.scrollBy({
      left:
        direction === "left" ? -(card.offsetWidth + 16) : card.offsetWidth + 16,
      behavior: "smooth",
    });
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white px-6 py-16 text-center sm:px-10 lg:px-16">
        <p className="text-sm text-neutral-500">Loading testimonials...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white px-6 py-16 text-center sm:px-10 lg:px-16">
        <p className="text-sm text-red-500">Failed to load testimonials.</p>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="w-full bg-white px-6 py-20 text-center sm:px-10 lg:px-16">
        <p className="text-2xl font-medium text-neutral-500">
          No testimonials available yet.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full min-w-0 overflow-hidden bg-white">
      <div className="w-full min-w-0 px-6 sm:px-10 lg:px-16">
        <div className="flex w-full min flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-3">
              <PillBadge text="Testimonials" />
            </div>

            <h2 className="max-w-full text-[26px] font-bold leading-tight tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl lg:text-[42px]">
              Loved by <span className="text-[#017958]">Creative Teams</span>
            </h2>

            <p className="mt-2 max-w-162.5 leading-6 text-[#475569]">
              See how teams are making every shoot simpler, faster, and more
              organized.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 shrink-0 items-center cursor-pointer justify-center rounded-lg bg-[#D9EBE6] text-[#016146] transition hover:scale-105"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="flex h-11 w-11 shrink-0 items-center cursor-pointer  justify-center rounded-lg bg-[#017958] text-white transition hover:scale-105"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-w-0 overflow-hidden pl-6 sm:pl-10 lg:pl-16">
        <div
          ref={scrollRef}
          className="mt-5 flex w-full min-w-0 max-w-full gap-4 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-card
              className="relative aspect-3/4 w-[78%] max-w-[78%] shrink-0 snap-start overflow-hidden rounded-[22px] sm:w-70 sm:max-w-none md:w-65 lg:w-70 xl:w-75"
            >
              {testimonial.image ? (
                <Image
                  src={resolveImage(testimonial.image)}
                  alt={testimonial.name || "Testimonial"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 78vw, (max-width: 768px) 280px, (max-width: 1024px) 260px, 300px"
                  priority={index < 2}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-sm text-neutral-400">
                  No image available
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#017958]">
                <Play
                  size={16}
                  className="ml-0.5 fill-white text-white"
                  strokeWidth={0}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <p className="text-base font-bold text-white">
                  {testimonial.name || "Anonymous"}
                </p>
                <p className="text-xs text-white/80">
                  {testimonial.position || "No details available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 shrink-0 items-center cursor-pointer justify-center rounded-lg bg-[#D9EBE6] text-[#016146] transition active:scale-95"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next testimonial"
          className="flex h-11 w-11 shrink-0 items-center  cursor-pointer justify-center rounded-lg bg-[#017958] text-white transition active:scale-95"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
