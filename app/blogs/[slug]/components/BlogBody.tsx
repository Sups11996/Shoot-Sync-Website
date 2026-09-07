export default function BlogBody({ content }: { content: string }) {
  return (
    <div className="whitespace-pre-line leading-relaxed text-[#475569] text-justify">
      {content}
    </div>
  );
}