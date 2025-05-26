import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType | React.ReactNode;
  iconPosition?: "left" | "right";
  containerWidth?: string;
};

export default function InputField({
  icon: Icon,
  iconPosition = "left",
  className = "",
  containerWidth,
  ...props
}: InputFieldProps) {
  return (
    <div className={`relative ${containerWidth ? containerWidth : " w-70 "} `}>
      {iconPosition === "left" && Icon && (
        <div className="absolute top-4 left-0 flex items-center pl-3 pointer-events-none">
          {typeof Icon === "function" ? (
            <Icon className="text-gray-400 text-lg" />
          ) : (
            Icon
          )}
        </div>
      )}

      <input
        {...props}
        className={`
          w-full rounded-full border border-gray-200 px-4 py-3 text-base
          focus:outline-none focus:ring-2 focus:ring-pink-400
          placeholder-gray-400
          ${iconPosition === "left" && Icon ? "pl-10" : ""}
          ${iconPosition === "right" && Icon ? "pr-10" : ""}
          ${className}
        `}
      />

      {iconPosition === "right" && Icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {typeof Icon === "function" ? (
            <Icon className="text-gray-400 text-lg" />
          ) : (
            Icon
          )}
        </div>
      )}
    </div>
  );
}
