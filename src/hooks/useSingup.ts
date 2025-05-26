"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, signupSchema } from "@/lib/validations/auth.schema";
import { AuthService } from "@/lib/supabase/services";

export function useSignup() {
  const router = useRouter();

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const handleSignup = async (formData: SignupFormData) => {
    let toastId;

    try {
      const {
        email,
        password,
        firstName,
        lastName,
        mobilePhone,
        landlinePhone,
        website,
      } = formData;
      toastId = toast.loading("Creando tu cuenta...", {
        autoClose: 2000,
      });

      await AuthService.signUp({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        mobilePhone: mobilePhone,
        landlinePhone: landlinePhone,
        website: website,
      });

      toast.update(toastId, {
        render: "¡Cuenta creada con éxito!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setTimeout(() => router.push("/orders"), 1000);
    } catch (error) {
      toast.dismiss(toastId);
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Error al registrar usuario");
        throw error;
      }
    }
  };

  return {
    form,
    handleSignup,
    isSubmitting: form.formState.isSubmitting,
  };
}
