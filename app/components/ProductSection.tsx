"use client";
import Image from "next/image";
import { useRef, type ChangeEvent } from "react";

import {
  UserRoundPen,
  Clock3,
  CalendarDays,
  MapPin,
  Check,
  FileText,
  Eye,
  Upload,
  MoreVertical,
  UsersRound,
} from "lucide-react";

const PHONE_IMAGE = "/assets/homePage/mobile.png";

const CANVAS_W = 1280;
const CANVAS_H = 650;

export default function WorkflowSection() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  return (
    <section className="w-full overflow-hidden bg-white px-5 sm:px-10 lg:px-16 pt-8">
      <div className="flex flex-col items-center gap-5 pb-10 lg:hidden">
        {/* Cards row */}
        <div className="flex w-full max-w-2xl flex-col gap-5 sm:flex-row sm:items-start sm:justify-center">
          {/* Script Writer card */}
          <div className="w-full sm:w-1/2">
            <div className="mb-3 flex h-7 w-fit items-center gap-2 rounded-full bg-[#017958] px-1 text-xs font-medium text-white">
              <div className="bg-white rounded-full text-[#017958] p-1 flex items-center justify-center">
                <UserRoundPen size={15} />
              </div>
              Script Writer
            </div>

            <div className="rounded-2xl bg-[#017958] p-4 text-white border border-[#016146]">
              <h3 className="text-sm font-semibold">
                Create Promotional Video for Cafe
              </h3>

              <p className="mt-2 text-[11px] leading-4">
                Create a short and engaging promotional video for the café. Use
                high-quality visuals, smooth transitions.
              </p>

              <p className="mt-1 text-[10px] opacity-80">Akash Chaudhary</p>

              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[9px] text-[#078261] ">
                  → Medium
                </span>

                <span className="flex items-center gap-1 font-medium rounded-full bg-white px-3 py-1 text-[9px] text-[#078261] cursor-pointer">
                  <FileText size={10} />
                  Video
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#014935] text-xs">
                  A
                </div>

                <div className="flex items-center gap-1 text-[9px]">
                  <Clock3 size={12} />
                  6h
                </div>

                <div className="flex items-center gap-1 text-[9px]">
                  <CalendarDays size={12} />
                  2026-08-23
                </div>
              </div>
            </div>
          </div>

          {/* Camera Crew card */}
          <div className="w-full sm:w-1/2">
            <div className="mb-3 flex h-7 w-fit items-center gap-2 rounded-full bg-[#017958] px-1 text-xs font-medium text-white">
              <div className="bg-white rounded-full text-[#017958] p-1 flex items-center justify-center">
                <UserRoundPen size={15} />
              </div>
              Camera Crew
            </div>

            <div className="rounded-2xl bg-[#015B42] p-4 text-white">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xs font-semibold">Aks</h3>
                  <p className="text-[10px]">akschy</p>
                </div>

                <span className="rounded-full bg-white px-3 text-[9px] text-[#017958] flex items-center">
                  Completed
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[10px]">
                <div className="flex items-center gap-2">
                  <UsersRound size={13} />A
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={13} />
                  sks
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays size={13} />
                  2026-08-23
                  <Clock3 size={13} className="ml-2" />
                  03:08:00
                </div>
              </div>

              <div className="my-4 h-px bg-white/30" />

              <div className="flex items-center">
                <button className="flex h-7 flex-1 items-center justify-center gap-2 rounded-md bg-white text-[10px] text-[#078261] cursor-pointer">
                  <Eye size={13} />
                  Details
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*" // adjust or remove to allow any file type
                  className="hidden"
                  onChange={handleFileChange}
                />

                <Upload
                  size={15}
                  className="ml-4 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                />
                <UsersRound size={15} className="ml-4" />
                <MoreVertical size={15} className="ml-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Connector: cards → Shoot Sync
                    Wrapped together with the Shoot Sync circle in one
                    zero-gap group so the lines actually touch the circle
                    instead of stopping short of it. */}
        <div className="flex w-full max-w-2xl flex-col items-center">
          <div className="sm:hidden">
            <span className="block h-6 w-px bg-[#017958]" />
          </div>

          <div className="relative hidden h-14 w-full sm:block">
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <path
                d="M 25 0 L 50 40"
                stroke="#017958"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
              <path
                d="M 75 0 L 50 40"
                stroke="#017958"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
            </svg>
          </div>

          {/* Shoot Sync */}
          <div className="rounded-full bg-[#D9EBE6] p-2">
            <div className="rounded-full bg-[#B0D5CB]">
              <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-8 border-[#B0D5CB] bg-[#017958]">
                <span className="text-xs sm:text-sm font-bold text-white">
                  Shoot Sync
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connector: Shoot Sync → Client Approved */}
        <span className="h-6 w-px bg-[#017958]" />

        {/* Client Approved */}
        <div className="flex items-center rounded-full bg-[#078261] px-3 py-1.5 text-[11px] font-semibold text-white">
          <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#078261]">
            <Check size={13} />
          </span>
          Client Approved
        </div>

        {/* Connector: Client Approved → Phone */}
        <span className="h-6 w-px bg-[#017958]" />

        {/* Phone */}
        <Image
          src={PHONE_IMAGE}
          alt="Promotional video"
          width={280}
          height={520}
          className="h-auto w-40 object-contain sm:w-48"
        />
      </div>

      <div
        className="
          hidden lg:block relative w-full overflow-hidden
          lg:h-110.5 xl:h-143 2xl:h-170.75
        "
      >
        <div
          className="
            absolute left-1/2 top-0 -translate-x-1/2
            origin-top
            lg:scale-[0.68] xl:scale-[0.88] 2xl:scale-[1.05]
          "
          style={{ width: CANVAS_W, height: CANVAS_H }}
        >
          {/* ================= TOP CARD ================= */}
          <div className="absolute left-0 top-0 z-10 w-66.25">
            <div className="mb-3 flex h-7 items-center gap-2 rounded-full bg-[#017958] px-1 text-xs font-medium text-white">
              <div className="bg-white rounded-full text-[#017958] p-1 flex items-center justify-center">
                <UserRoundPen size={15} />
              </div>
              Script Writer
            </div>

            <div className="rounded-2xl bg-[#017958] p-4 text-white border border-[#016146]">
              <h3 className="text-sm font-semibold">
                Create Promotional Video for Cafe
              </h3>

              <p className="mt-2 text-[11px] leading-4">
                Create a short and engaging promotional video for the café. Use
                high-quality visuals, smooth transitions.
              </p>

              <p className="mt-1 text-[10px] opacity-80">Akash Chaudhary</p>

              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[9px] text-[#078261]">
                  → Medium
                </span>

                <span className="flex items-center gap-1 font-mediums rounded-full bg-white px-3 py-1 text-[9px] text-[#078261] cursor-pointer">
                  <FileText size={10} />
                  Video
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#014935] text-xs">
                  A
                </div>

                <div className="flex items-center gap-1 text-[9px]">
                  <Clock3 size={12} />
                  6h
                </div>

                <div className="flex items-center gap-1 text-[9px]">
                  <CalendarDays size={12} />
                  2026-08-23
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CARD ================= */}
          <div className="absolute bottom-0 left-0 z-10 w-66.25">
            <div className="mb-3 flex h-7 items-center gap-2 rounded-full bg-[#017958] px-1 text-xs font-medium text-white">
              <div className="bg-white rounded-full text-[#017958] p-1 flex items-center justify-center">
                <UserRoundPen size={15} />
              </div>
              Camera Crew
            </div>

            <div className="rounded-2xl bg-[#015B42] p-4 text-white">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xs font-semibold">Aks</h3>
                  <p className="text-[10px]">akschy</p>
                </div>

                <span className="rounded-full bg-white px-3 text-[9px] text-[#017958] flex items-center">
                  Completed
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[10px]">
                <div className="flex items-center gap-2">
                  <UsersRound size={13} />A
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={13} />
                  sks
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays size={13} />
                  2026-08-23
                  <Clock3 size={13} className="ml-2" />
                  03:08:00
                </div>
              </div>

              <div className="my-4 h-px bg-white/30" />

              <div className="flex items-center">
                <button className="flex h-7 flex-1 items-center justify-center gap-2 rounded-md bg-white text-[10px] text-[#078261]">
                  <Eye size={13} />
                  Details
                </button>

                <Upload
                  size={15}
                  className="ml-4"
                  onClick={() => fileInputRef.current?.click()}
                />
                <UsersRound size={15} className="ml-4" />
                <MoreVertical size={15} className="ml-4" />
              </div>
            </div>
          </div>

          {/* TOP CARD → SHOOT SYNC */}
          <Image
            src="/assets/homePage/connector-top.png"
            alt=""
            width={210}
            height={180}
            className="pointer-events-none absolute left-62.5 top-22.5 z-0 w-52.5 h-auto object-contain"
          />

          {/* BOTTOM CARD → SHOOT SYNC */}
          <Image
            src="/assets/homePage/connector-bottom.png"
            alt=""
            width={210}
            height={180}
            className="pointer-events-none absolute left-62.5 bottom-22.5 z-0 w-52.5 h-auto object-contain"
          />

          {/* ================= SHOOT SYNC ================= */}
          <div
            className="
              absolute left-100 top-1/2 z-20 -translate-y-1/2
              rounded-full bg-[#D9EBE6] p-2
            "
          >
            <div className="bg-[#B0D5CB] rounded-full">
              <div
                className="
                  flex h-32.5 w-32.5 items-center justify-center
                  rounded-full border-10 border-[#B0D5CB] bg-[#017958]
                "
              >
                <span className="text-sm font-bold text-white">Shoot Sync</span>
              </div>
            </div>
          </div>

          {/* Junction node: where Shoot Sync docks into the connector heading to the phone */}
          {/* <div
            className="
              absolute z-15 top-1/2 left-[492px] -translate-y-1/2
              h-3 w-3 rounded-full bg-white border-2 border-[#017958]
            "
          /> */}

          {/* SHOOT SYNC → PHONE */}
          <Image
            src="/assets/homePage/connector-middle.png"
            alt=""
            width={490}
            height={90}
            className="
              pointer-events-none absolute left-125 top-1/2 z-0
              -translate-y-1/2 object-contain w-122.5 h-22.5
            "
          />

          {/* ================= CLIENT APPROVED ================= */}
          <div
            className="
              absolute left-175 top-1/2 z-30 flex -translate-y-1/2
              items-center rounded-full bg-[#078261] px-3 py-1.5
              text-[11px] font-semibold text-white
            "
          >
            <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#078261]">
              <Check size={13} />
            </span>
            Client Approved
          </div>

          {/* ================= PHONE IMAGE ================= */}
          <Image
            src={PHONE_IMAGE}
            alt="Promotional video"
            width={280}
            height={520}
            priority
            className="
              absolute left-246.25 top-1/2 z-10 -translate-y-1/2
              pointer-events-none w-70 h-auto object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
