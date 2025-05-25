import { Button, InputField } from "@/app/shared/components";
import Link from "next/link";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Arrow } from "../../../shared/components/icons";

function ForgotPasswordForm() {
  return (
    <form className="flex flex-col gap-4 md:gap-2 items-center ">
      <InputField
        type="text"
        placeholder="Email*"
        icon={MdOutlineMailOutline}
        className="font-medium mb-5 "
        containerWidth="w-90"
      />

      <Button type="submit" className="w-40 h-12 mb-2">
        Continuar <Arrow />
      </Button>
      <span className="text-xs text-center text-gray-500">
        Remember Password?{" "}
        <Link
          href="/"
          className=" text-center font-bold text-pink-500 tracking-wider"
        >
          Login
        </Link>
      </span>
    </form>
  );
}

export default ForgotPasswordForm;
