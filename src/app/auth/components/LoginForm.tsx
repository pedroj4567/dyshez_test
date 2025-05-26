"use client";
import { Button, InputField } from "@/ui/components";
import { MdAlternateEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import Link from "next/link";
import { Arrow } from "../../../ui/components/icons";
import { ToastContainer } from "react-toastify";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const { form, handleLogin, isSubmitting } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        closeButton
      />
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4 md:gap-2 items-center "
      >
        <InputField
          type="text"
          placeholder="Correo o teléfono"
          {...register("email")}
          icon={MdAlternateEmail}
          error={errors.email?.message}
        />
        <InputField
          type="password"
          placeholder="Contraseña"
          {...register("password")}
          className=""
          icon={HiLockClosed}
          error={errors.password?.message}
        />
        <Button
          type="submit"
          className="w-40 h-12 mb-2 mt-5"
          disabled={isSubmitting}
        >
          Continuar <Arrow />
        </Button>
        <Link
          href="/auth/forgotPassword"
          className="text-xs text-center text-gray-500 hover:text-pink-500 tracking-wider"
        >
          ¿Cambiaste tu teléfono?
        </Link>
      </form>
    </>
  );
}
