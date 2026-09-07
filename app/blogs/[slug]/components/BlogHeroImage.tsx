import Image from "next/image";
import { resolveImage } from "./utils";

export default function BlogHeroImage({
  image,
  title,
}: {
  image: string | null;
  title: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[20px] border border-[#CBD5E1]">
      <Image
        src={resolveImage(image)}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
        loading="eager"
        priority
      />
    </div>
  );
}