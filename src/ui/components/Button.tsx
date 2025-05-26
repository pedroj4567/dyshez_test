import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={` bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full py-3 transition flex items-center justify-center gap-2 text-base ${
        props.className ?? ""
      }`}
    >
      {children}
    </button>
  );
}
