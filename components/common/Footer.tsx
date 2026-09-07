"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { LuMail, LuPhoneCall, LuMapPin } from "react-icons/lu";
import type { IconType } from "react-icons";
import { useApi } from "@/hooks/useApi";
import { contactInfoApi } from "@/services/api/contact-info";

type SocialLink = {
  id: string;
  icon: IconType;
  path: string;
};

type FooterLink = {
  id: string;
  text: ReactNode;
  path: string;
  icon?: IconType;
  target?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const { data: contactInfoList } = useApi(contactInfoApi.getContactInfo);
  const contactInfo = contactInfoList?.[0];

  console.log(contactInfo)

  
  const socialLinks: SocialLink[] = [
    { id: "facebook", icon: FaFacebook, path: contactInfo?.facebook_link ?? "#" },
    { id: "instagram", icon: FaInstagram, path: contactInfo?.instagram ?? "#" },
    { id: "tiktok", icon: FaTiktok, path: contactInfo?.tiktok ?? "#" },
    { id: "youtube", icon: FaYoutube, path: contactInfo?.youtube_link ?? "#" },
  ];

  const footerData: FooterSection[] = [
    {
      title: "Product",
      links: [
        { id: "how-it-works", text: "How It Works", path: "/how-it-works" },
        { id: "pricing", text: "Pricing", path: "/pricing" },
        { id: "faq", text: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: "about-us", text: "About Us", path: "/about-us" },
        { id: "careers", text: "Careers", path: "/careers" },
        { id: "blog", text: "Blog", path: "/blogs" },
        {
          id: "privacy-policy",
          text: "Privacy Policy",
          path: "/privacy-policy",
        },
        { id: "contact-us", text: "Contact Us", path: "/contact-us" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          id: "email",
          icon: LuMail,
          text: contactInfo?.email ?? "N/A",
          path: `mailto:${contactInfo?.email ?? ""}`,
        },
        {
          id: "phone",
          icon: LuPhoneCall,
          text: contactInfo?.phone_number ?? "N/A",
          path: `tel:${contactInfo?.phone_number ?? ""}`,
        },
        {
          id: "address",
          icon: LuMapPin,
          text: contactInfo?.address ?? "N/A",
          path: contactInfo?.address
            ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
            : "#",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <footer className="flex flex-col gap-8 bg-[#002A1F] px-5 py-10 sm:px-8 sm:py-12 lg:px-16">
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex w-fit gap-1 text-lg text-white transition-transform duration-150 ease-in-out active:scale-95"
          >
            <span className="font-extrabold">Shoot</span>
            <span className="font-medium">Sync</span>
          </Link>

          <div className="flex flex-col text-sm text-[#B0D5CB] sm:text-base">
            <span>The all-in-one platform for managing your video</span>
            <span>production from planning to delivery.</span>
          </div>

          <div className="flex flex-wrap gap-2 text-lg text-white">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit rounded-[8px] border border-[#014935] bg-[#003628] p-2 transition-all duration-150 active:scale-95 hover:scale-110 hover:rotate-6"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 min-[425px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-10 lg:w-auto lg:flex lg:items-start lg:gap-10 xl:gap-16 2xl:gap-24">
          {footerData.map((section) => (
            <div
              key={section.title}
              className={`flex flex-col gap-4 sm:gap-5 ${
                section.title === "Contact Us"
                  ? "col-span-1 min-[425px]:col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <h3 className="text-base font-medium text-white">
                {section.title}
              </h3>

              <div className="flex flex-col gap-3">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.id}
                      href={link.path}
                      target={link.target}
                      className={`w-fit group flex gap-3 text-lg text-[#B2D0CA] sm:gap-5 ${
                        link.id === "address" ? "items-start" : "items-center"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          strokeWidth={2}
                          className="mt-0.5 shrink-0 text-xl text-[#008F72]"
                        />
                      )}
                      <p className="relative text-sm overflow-hidden">
                        <span>{link.text}</span>
                        <span className="absolute inset-0 w-0 overflow-hidden whitespace-nowrap text-white transition-[width] duration-300 ease-out group-hover:w-full">
                          {link.text}
                        </span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="w-full border-[#003628]" />

      <p className="text-center text-xs text-[#B0D5CB] sm:text-sm">
        © {new Date().getFullYear()} ShootSync. All rights reserved.
      </p>
    </footer>
  );
}
