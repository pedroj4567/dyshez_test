import { InputHTMLAttributes, forwardRef } from "react";
import { Check } from "./icons/Check";

type TermsCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TermsCheckbox = forwardRef<HTMLInputElement, TermsCheckboxProps>(
  (
    {
      label = "Acepto los términos y condiciones",
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <label className="flex items-center space-x-2 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              ref={ref}
              className="appearance-none w-5 h-5 border-2 border-pink-400 rounded-md 
              checked:bg-pink-500 checked:border-pink-500 transition-all duration-200
              focus:ring-2 focus:ring-pink-300 focus:ring-offset-2
              peer"
              {...props}
            />
            <Check />
          </div>
          <span className="text-gray-700 text-sm md:text-base font-medium">
            {label}
          </span>
        </label>
        {error && <span className=" text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

TermsCheckbox.displayName = "TermsCheckbox";

export default TermsCheckbox;
