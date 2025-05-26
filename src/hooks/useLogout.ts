"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/supabase/services";
export function useLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      console.log("Me ejecuto");

      await AuthService.signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Error al cerrar sesión");
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return { handleLogout };
}
