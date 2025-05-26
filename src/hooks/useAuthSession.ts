"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";
import { AuthService } from "@/lib/supabase/services";

export function useAuthSession(
  required: boolean = false,
  redirectTo: string = "/auth"
) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        setLoading(true);
        const currentSession = await AuthService.getSession();

        setSession(currentSession);

        if (required && !currentSession) {
          router.push(redirectTo);
          return;
        }
      } catch (error) {
        console.error("Error checking session:", error);
        if (required) {
          router.push(redirectTo);
        }
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [required, redirectTo, router]);

  return { session, loading };
}
