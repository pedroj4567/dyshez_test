"use client";
import { useSupabase } from "@/providers/SupabaseProvider";

export const useAuth = () => {
  const { auth, user, isLoading } = useSupabase();

  return {
    user,
    isLoading,
    signUp: auth.signUp,
    signIn: auth.signIn,
    signOut: auth.signOut,
  };
};
