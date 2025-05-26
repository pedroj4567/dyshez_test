"use client";
import { useState } from "react";
import { Button, InputField } from "@/ui/components";
import { MdAlternateEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import Link from "next/link";
import { Arrow } from "../../../ui/components/icons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 md:gap-2 items-center ">
      <InputField
        type="text"
        placeholder="Correo o teléfono"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={MdAlternateEmail}
      />

      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-8"
        icon={HiLockClosed}
      />
      <Button type="submit" className="w-40 h-12 mb-2">
        Continuar <Arrow />
      </Button>
      <Link
        href="/auth/forgotPassword"
        className="text-xs text-center text-gray-500 hover:text-pink-500 tracking-wider"
      >
        ¿Cambiaste tu teléfono?
      </Link>
    </form>
  );
}
