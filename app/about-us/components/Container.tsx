import Image from "next/image";
import ContainerImage from "../../../public/assets/about-us/Container.png";

export default function Container() {
  return (
    <section className="w-full bg-white px-6 pb-8 pt-0 sm:px-10 sm:pb-10 md:pb-14 lg:px-16 lg:pb-16">
      <div className="mx-auto w-full">
        <div className="relative w-full">
          <Image
            src={ContainerImage}
            alt="Shoot Sync dashboard calendar view"
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}