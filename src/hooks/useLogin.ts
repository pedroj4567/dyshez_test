"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations/auth.schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { AuthService } from "@/lib/supabase/services";

type LoginFormData = z.infer<typeof loginSchema>;

export function useLogin() {
  const router = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const handleLogin = async (formData: LoginFormData) => {
    try {
      const { email, password } = formData;
      const toastId = toast.loading("Iniciando sesión...");

      const session = await AuthService.signIn(email, password);

      if (!session) window.location.href = "/";

      toast.update(toastId, {
        render: "¡Bienvenido!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setTimeout(() => router.push("/orders"), 1000);
      router.refresh();
    } catch (error) {
      toast.dismiss();
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return {
    form,
    handleLogin,
    isSubmitting: form.formState.isSubmitting,
  };
}
