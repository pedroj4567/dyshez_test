import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";

type PhoneInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  countryCode?: string;
  icon?: IconType | React.ReactNode;
  iconPosition?: "left" | "right";
  containerWidth?: string;
  error?: string;
};

export default function PhoneInputField({
  countryCode = "+52",
  icon: Icon,
  iconPosition = "left",
  className = "",
  containerWidth,
  error,
  ...props
}: PhoneInputFieldProps) {
  return (
    <div className={`relative ${containerWidth ? containerWidth : "w-70"}`}>
      {iconPosition === "left" && Icon && (
        <div className="absolute top-4 left-0 flex items-center pl-3 pointer-events-none">
          {typeof Icon === "function" ? (
            <Icon
              className={`text-gray-400 text-lg ${error ? "text-red-500" : ""}`}
            />
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
        <span
          className={`text-gray-700 font-medium ${error ? "text-red-500" : ""}`}
        >
          {countryCode}
        </span>
      </div>

      <input
        {...props}
        type="tel"
        className={`
          w-full rounded-full border ${
            error ? "border-red-500" : "border-gray-200"
          } px-4 py-3 text-base
          focus:outline-none focus:ring-2 ${
            error ? "focus:ring-red-400" : "focus:ring-pink-400"
          }
          placeholder-gray-400
          ${iconPosition === "left" ? "pl-24" : ""}
          ${iconPosition === "right" && Icon ? "pr-10" : ""}
          ${className}
        `}
      />

      {iconPosition === "right" && Icon && !error && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {typeof Icon === "function" ? (
            <Icon className="text-gray-400 text-lg" />
          ) : (
            Icon
          )}
        </div>
      )}

      {error && (
        <div className="absolute inset-y-0 -top-6 right-0 flex items-center pr-3">
          <FiAlertCircle className="text-red-500 text-lg" />
        </div>
      )}

      {error && <p className="mt-1 ml-3 text-sm text-red-500">{error}</p>}
    </div>
  );
}
