import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import FAQ from "../../components/common/FAQ";
import CtaSection from "../../components/common/CtaSection";

const Contact = () => {
  return (
    <main className="mt-2 mb-11 px-5 sm:px-10 lg:px-16 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <ContactHero />
        <ContactForm />
      </div>
      <FAQ />
      <div className="mt-7">
        <CtaSection />
      </div>
    </main>
  );
};
export default Contact;
