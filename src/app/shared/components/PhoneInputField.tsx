import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

type PhoneInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  countryCode?: string;
  icon?: IconType | React.ReactNode;
  iconPosition?: "left" | "right";
  containerWidth?: string;
};

export default function PhoneInputField({
  countryCode = "+52",
  icon: Icon,
  iconPosition = "left",
  className = "",
  containerWidth,
  ...props
}: PhoneInputFieldProps) {
  return (
    <div className={`relative ${containerWidth ? containerWidth : "w-70"}`}>
      {iconPosition === "left" && Icon && (
        <div className="absolute top-4 left-0 flex items-center pl-3 pointer-events-none">
          {typeof Icon === "function" ? (
            <Icon className="text-gray-400 text-lg" />
          ) : (
            Icon
          )}
        </div>
      )}

      <div
        className={`absolute top-3 left-0 flex items-center ${
          iconPosition === "left" && Icon ? "pl-10" : "pl-3"
        } pointer-events-none`}
      >
        <span className="text-gray-700 font-medium">{countryCode}</span>
      </div>

      <input
        {...props}
        type="tel"
        className={`
          w-full rounded-full border border-gray-200 px-4 py-3 text-base
          focus:outline-none focus:ring-2 focus:ring-pink-400
          placeholder-gray-400
          ${
            iconPosition === "left" ? "pl-24" : ""
          } /* Ajustado para icono + código */
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
