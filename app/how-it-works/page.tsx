import Header from "./components/Header";
import Cards from "./components/Cards";
import CtaSection from "../../components/common/CtaSection";

export default function HowItWorks() {
  return (
    <>
      <main className="mt-25 mb-11 px-5 sm:px-10 lg:px-16 flex flex-col gap-32">
        <div className="flex flex-col gap-8">
          <Header />
          <Cards />
        </div>
        <CtaSection />
      </main>
    </>
  );
}
