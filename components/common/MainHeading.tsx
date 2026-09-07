interface HeadingProps {
  text: string;
  green?: string;
  brClassName?: string;
}

export default function MainHeading({
  text,
  green,
  brClassName = "",
}: HeadingProps) {
  const parts = text.split("<br>");

  return (
    <h1 className="text-center text-[28px] font-bold leading-[1.2] text-[#0F172A] sm:text-[38px] md:text-[46px] lg:text-[54px]">
      {parts.map((part, index) => (
        <span key={index}>
          {part.split(green || "").map((textPart, i, arr) => (
            <span key={i}>
              {textPart}

              {i < arr.length - 1 && (
                <span className="text-[#017958]">{green}</span>
              )}
            </span>
          ))}

          {index < parts.length - 1 && <br className={brClassName} />}
        </span>
      ))}
    </h1>
  );
}