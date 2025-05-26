"use client";

import { useSignup } from "@/hooks/useSingup";
import {
  Button,
  InputField,
  PhoneInputField,
  TermsCheckbox,
} from "@/ui/components";
import { Arrow } from "@/ui/components/icons";
import { FiPhone, FiSmartphone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { ToastContainer } from "react-toastify";

export const SignupForm = () => {
  const {
    form: {
      register,
      handleSubmit,
      formState: { errors },
    },
    handleSignup,
    isSubmitting,
  } = useSignup();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await handleSignup(data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  });

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

      <form onSubmit={onSubmit} className="flex flex-col gap-2 md:gap-5">
        <div className="flex justify-center gap-15">
          <InputField
            type="text"
            placeholder="Nombre(s) *"
            icon={LuUserRound}
            containerWidth="w-90"
            {...register("firstName")}
            error={errors.firstName?.message?.toString()}
          />
          <InputField
            type="text"
            placeholder="Apellido(s) *"
            icon={LuUserRound}
            containerWidth="w-90"
            {...register("lastName")}
            error={errors.lastName?.message?.toString()}
          />
        </div>

        <div className="flex justify-center gap-15">
          <PhoneInputField
            placeholder="Teléfono móvil *"
            icon={FiSmartphone}
            containerWidth="w-90"
            {...register("mobilePhone")}
            error={errors.mobilePhone?.message?.toString()}
          />
          <PhoneInputField
            placeholder="Teléfono fijo"
            icon={FiPhone}
            containerWidth="w-90"
            {...register("landlinePhone")}
            error={errors.landlinePhone?.message?.toString()}
          />
        </div>

        <div className="flex justify-center gap-15">
          <InputField
            type="text"
            placeholder="Sitio Web"
            icon={TbWorld}
            containerWidth="w-90"
            {...register("website")}
            error={errors.website?.message?.toString()}
          />
          <InputField
            type="email"
            placeholder="Email *"
            icon={MdOutlineMailOutline}
            containerWidth="w-90"
            {...register("email")}
            error={errors.email?.message?.toString()}
          />
        </div>

        <div className="flex justify-center gap-15">
          <InputField
            type="password"
            placeholder="Contraseña *"
            icon={RxLockClosed}
            containerWidth="w-90"
            {...register("password")}
            error={errors.password?.message?.toString()}
          />
          <InputField
            type="password"
            placeholder="Verificar contraseña *"
            icon={RxLockClosed}
            containerWidth="w-90"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message?.toString()}
          />
        </div>

        <div className="flex justify-center mt-2">
          <TermsCheckbox
            {...register("terms")}
            error={errors.terms?.message?.toString()}
          />
        </div>

        <div className="flex justify-center items-center gap-3 flex-col">
          <Button type="submit" className="w-40" disabled={isSubmitting}>
            {isSubmitting ? "Procesando..." : "Continuar"} <Arrow />
          </Button>
          <p className="text-sm text-center text-gray-500">
            Si ya tienes un restaurante en Dyshez y quieres agregar una{" "}
            <span className="text-center text-gray-500 font-bold">
              nueva sucursal
            </span>
            , conoce cómo hacerlo
          </p>
        </div>
      </form>
    </>
  );
};
