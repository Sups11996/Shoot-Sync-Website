"use client";

import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useApi } from "@/hooks/useApi";
import { contactApi } from "@/services/api/contact";
import { contactInfoApi } from "@/services/api/contact-info";

type SocialLinks = {
  icon: IconType;
  href: string;
  label: string;
};

type FormFields = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

const initialForm: FormFields = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validateField(name: keyof FormFields, value: string): string {
  const trimmed = value.trim();
  switch (name) {
    case "fullName":
      if (!trimmed) return "Full name is required.";
      if (trimmed.length < 2) return "Full name is too short.";
      if (trimmed.length > 80) return "Full name is too long.";
      return "";
    case "companyName":
      if (trimmed && trimmed.length > 100) return "Company name is too long.";
      return "";
    case "email":
      if (!trimmed) return "Email address is required.";
      if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address.";
      return "";
    case "phone":
      if (!trimmed) return "Phone number is required.";
      if (!PHONE_REGEX.test(trimmed))
        return "Enter a valid 10-digit phone number.";
      return "";
    case "subject":
      if (!trimmed) return "Subject is required.";
      if (trimmed.length < 3) return "Subject is too short.";
      if (trimmed.length > 120) return "Subject is too long.";
      return "";
    case "message":
      if (!trimmed) return "Message is required.";
      if (trimmed.length < 10)
        return "Message should be at least 10 characters.";
      if (trimmed.length > 2000) return "Message is too long.";
      return "";
    default:
      return "";
  }
}

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormFields, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    loading: submitting,
    error: apiError,
    refetch: submitContact,
  } = useApi(contactApi.submitContactUs, undefined, { immediate: false });

  const { data: contactInfoList } = useApi(contactInfoApi.getContactInfo);
  const contactInfo = contactInfoList?.[0];
  const isSubmittingRef = useRef(false);
  const lastSubmitAtRef = useRef(0);
  const cooldownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SUBMIT_COOLDOWN_MS = 15000;

  const socialLinks: SocialLinks[] = [
    {
      icon: FaFacebookF,
      href: contactInfo?.facebook_link ?? "#",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: contactInfo?.instagram ?? "#",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      href: contactInfo?.tiktok ?? "#",
      label: "TikTok",
    },
    {
      icon: FaYoutube,
      href: contactInfo?.youtube_link ?? "#",
      label: "YouTube",
    },
  ];

  const startCooldown = () => {
    lastSubmitAtRef.current = Date.now();
    setCooldown(SUBMIT_COOLDOWN_MS / 1000);
    if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
    cooldownTimerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormFields;

    const nextValue =
      field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setForm((prev) => ({ ...prev, [field]: nextValue }));
    if (touched[field] || submitted) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, nextValue),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const validateAll = (): FormErrors => {
    const nextErrors: FormErrors = {};
    (Object.keys(form) as (keyof FormFields)[]).forEach((field) => {
      const message = validateField(field, form[field]);
      if (message) nextErrors[field] = message;
    });
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== "") return;
    if (isSubmittingRef.current) return;

    const msSinceLast = Date.now() - lastSubmitAtRef.current;
    if (lastSubmitAtRef.current !== 0 && msSinceLast < SUBMIT_COOLDOWN_MS)
      return;

    setSubmitted(true);
    const nextErrors = validateAll();
    setErrors(nextErrors);
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    isSubmittingRef.current = true;
    try {
      await submitContact(form);
      setForm(initialForm);
      setTouched({});
      setSubmitted(false);
      setErrors({});
      startCooldown();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    } catch {
      // error captured in apiError from hook, rendered below
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const baseInputClass =
    "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:ring-1 sm:text-base";

  const inputClass = (field: keyof FormFields) =>
    `${baseInputClass} ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-400"
        : "border-neutral-200 focus:border-[#017958] focus:ring-[#017958]"
    }`;

  const labelClass = "mb-1.5 block text-sm font-medium text-neutral-800";
  const errorClass = "mt-1 text-xs font-medium text-red-500";

  return (
    <section className="w-full bg-white pt-2 lg:px-16 relative">
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-[#017958] px-5 py-4 text-white shadow-lg">
          <svg
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-semibold text-sm">Message sent!</p>
            <p className="text-xs text-white/80">
              We&apos;ll get back to you soon.
            </p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="ml-2 text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px] lg:gap-8">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:p-8"
        >
          <div
            aria-hidden="true"
            className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
          >
            <label htmlFor="company_website">Leave this field empty</label>
            <input
              id="company_website"
              name="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.fullName}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
                className={inputClass("fullName")}
              />
              {errors.fullName && (
                <p id="fullName-error" className={errorClass}>
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="companyName" className={labelClass}>
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Enter Your Company Name"
                value={form.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.companyName}
                aria-describedby={
                  errors.companyName ? "companyName-error" : undefined
                }
                className={inputClass("companyName")}
              />
              {errors.companyName && (
                <p id="companyName-error" className={errorClass}>
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass("email")}
              />
              {errors.email && (
                <p id="email-error" className={errorClass}>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={inputClass("phone")}
              />
              {errors.phone && (
                <p id="phone-error" className={errorClass}>
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter Your Subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={inputClass("subject")}
              />
              {errors.subject && (
                <p id="subject-error" className={errorClass}>
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write Your Message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClass("message")} resize-none`}
              />
              {errors.message && (
                <p id="message-error" className={errorClass}>
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || cooldown > 0}
            className="mt-6 w-full rounded-lg bg-[#017958] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#016146] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
          >
            {submitting
              ? "Sending..."
              : cooldown > 0
                ? `Please wait (${cooldown}s)`
                : "Send Message"}
          </button>

          {apiError !== null && (
            <p className="mt-3 text-sm font-medium text-red-500" role="alert">
              {(apiError as { message?: string })?.message ??
                "Something went wrong. Please try again."}
            </p>
          )}
        </form>

        <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:p-8">
          <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">
            Contact Information
          </h3>

          <div className="mt-5 flex flex-col gap-4">
            <a
              href={`tel:${contactInfo?.phone_number ?? ""}`}
              className="flex items-start gap-3 rounded-lg transition hover:bg-neutral-50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9EBE6] text-[#016146]">
                <Phone size={16} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-medium text-[#016146]">
                  Phone Number
                </p>
                <p className="mt-0.5 text-sm text-neutral-700">
                  {contactInfo?.phone_number ?? "N/A"}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${contactInfo?.email ?? ""}`}
              className="flex items-start gap-3 rounded-lg transition hover:bg-neutral-50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9EBE6] text-[#016146]">
                <Mail size={16} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-medium text-[#016146]">
                  Email Address
                </p>
                <p className="mt-0.5 text-sm text-neutral-700">
                  {contactInfo?.email ?? "N/A"}
                </p>
              </div>
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo?.address ?? "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg transition hover:bg-neutral-50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9EBE6] text-[#016146]">
                <MapPin size={16} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-medium text-[#016146]">
                  Our Location
                </p>
                <p className="mt-0.5 text-sm text-neutral-700">
                  {contactInfo?.address ?? "N/A"}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-6 border-t border-neutral-100 pt-6">
            <p className="text-sm font-semibold text-neutral-900">
              Follow Us On
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Stay connected for the latest updates on Shoot Sync
            </p>

            <div className="mt-3 flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B0D5CB] bg-[#D9EBE6] text-[#016146] transition hover:bg-[#c7e5db]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
