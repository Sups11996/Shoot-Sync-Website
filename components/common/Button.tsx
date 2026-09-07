type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

function Button({
  text,
  variant,
  className = "",
  type = "button",
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#017958] text-white hover:bg-[#016A59]",

    secondary:
      "border border-[#017958] bg-transparent text-emerald-700 hover:bg-white",
  };

  return (
    <button
      type={type}
      className={`rounded-lg px-6 py-3 text-lg font-normal transform transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016A59] cursor-pointer active:duration-100 active:scale-97 ${variantStyles[variant]} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;