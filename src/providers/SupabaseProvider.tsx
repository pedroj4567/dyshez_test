"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "@/lib/supabase/services";
import { User } from "@supabase/supabase-js";

type SupabaseContextType = {
  user: User | null;
  isLoading: boolean;
  auth: typeof AuthService;
};

const SupabaseContext = createContext<SupabaseContextType | null>(null);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AuthService.getCurrentUser().then((user) => {
      setUser(user);
      setIsLoading(false);
    });

    const unsubscribe = AuthService.onAuthStateChange(setUser);
    return unsubscribe;
  }, []);

  return (
    <SupabaseContext.Provider value={{ user, isLoading, auth: AuthService }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context)
    throw new Error("useSupabase must be used within SupabaseProvider");
  return context;
};
