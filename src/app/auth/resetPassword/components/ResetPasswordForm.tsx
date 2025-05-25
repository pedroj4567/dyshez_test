import { Button, InputField } from "@/app/ui/components";
import Link from "next/link";
import React from "react";
import { RxLockClosed } from "react-icons/rx";
import { Arrow } from "../../../ui/components/icons";

const ResetPasswordForm = () => {
  return (
    <form className="flex flex-col gap-4 md:gap-2 items-center">
      <InputField
        type="password"
        placeholder="Password*"
        // onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
        icon={RxLockClosed}
        containerWidth="w-90"
      />

      <InputField
        type="password"
        placeholder="Verify Password*"
        // onChange={(e) => setPassword(e.target.value)}
        className="mb-8"
        icon={RxLockClosed}
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
};

export default ResetPasswordForm;
