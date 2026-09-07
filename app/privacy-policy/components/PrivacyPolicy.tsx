type Section = {
  title: string;
  content?: string;
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: "1. Introduction",
    content:
      'Youth IT ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
  },
  {
    title: "2. Information We Collect",
    content: "We may collect information about you in a variety of ways. The information we may collect includes:",
    bullets: [
      "Personal Data: Name, email address, phone number, mailing address, and other contact information",
      "Payment Information: Credit card numbers, billing addresses, and other financial information necessary to process payments",
      "Usage Data: Information about how you access and use our website and services",
      "Technical Data: IP address, browser type, device information, and other technical identifiers",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: "We use the information we collect for various purposes, including:",
    bullets: [
      "To provide, maintain, and improve our services",
      "To process your registrations and payments",
      "To send you updates, newsletters, and promotional materials",
      "To respond to your inquiries and provide customer support",
      "To detect, prevent, and address technical issues",
      "To comply with legal obligations",
    ],
  },
  {
    title: "4. Information Sharing and Disclosure",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
    bullets: [
      "With service providers who assist us in operating our website and conducting our business",
      "When required by law or to respond to legal process",
      "To protect our rights, property, or safety, or that of our users or others",
      "In connection with a business transfer, such as a merger or acquisition",
    ],
  },
  {
    title: "5. Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.",
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "7. Your Rights",
    content: "Depending on your location, you may have certain rights regarding your personal information, including:",
    bullets: [
      "The right to access your personal information",
      "The right to correct inaccurate information",
      "The right to request deletion of your information",
      "The right to object to processing of your information",
      "The right to data portability",
    ],
  },
  {
    title: "8. Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    content:
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
  },
  {
    title: "10. Contact Us",
    content: "If you have any questions about these Terms of Use, please contact us at:",
    bullets: [
      "Email: hamroyouthit@gmail.com",
      "Phone: +977 9746888890",
      "Address: Pargati Chowk, Itahari, Nepal",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 md:px-10 lg:px-12 xl:px-16">
      <div className="mx-auto w-full ">
        <h1 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
          Privacy Policy
        </h1>

       
        <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-[#0f172a] sm:text-xl">
                {section.title}
              </h2>

              {section.content && (
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569] sm:text-base">
                  {section.content}
                </p>
              )}

              {section.bullets && (
                <ul className="mt-3 flex flex-col gap-2 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc marker:text-[#475569]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs font-medium text-[#475569] sm:text-sm">
          Last updated: January 9, 2026
        </p>
      </div>
    </section>
  );
}