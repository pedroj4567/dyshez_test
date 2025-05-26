import { supabase } from "../client";
import { User, Session } from "@supabase/supabase-js";

interface SignUpParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  landlinePhone?: string;
  website?: string;
}

export class AuthService {
  static async getSession(): Promise<Session | null> {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session ?? null;
  }
  static async signUp({
    email,
    password,
    firstName,
    lastName,
    mobilePhone,
    landlinePhone,
    website,
  }: SignUpParams): Promise<Session | null> {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: `${firstName} ${lastName}`,
        },
      },
    });

    if (authError) throw new Error(authError.message);
    if (!authData.user) throw new Error("No se pudo crear el usuario");

    const { error: dbError } = await supabase.from("users").insert({
      id: authData.user.id,
      first_name: firstName,
      last_name: lastName,
      mobile_phone: mobilePhone,
      landline_phone: landlinePhone,
      website: website || null,
    });

    if (dbError) {
      await supabase.auth.admin.deleteUser(authData.user.id);
      throw new Error(dbError.message);
    }

    return authData.session;
  }

  static async getProfile(userId: string) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  static async signIn(
    email: string,
    password: string
  ): Promise<{ session: Session }> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    return {
      session: data?.session,
    };
  }

  static async signOut(): Promise<void> {
    try {
      const { error } = await supabase.auth.signOut({ scope: "local" });
      if (error) throw new Error(error.message);

      if (typeof window !== "undefined") {
        localStorage.removeItem("sb-auth-token");
        sessionStorage.clear();

        document.cookie =
          "sb-auth-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        document.cookie =
          "sb-refresh-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      throw error;
    }
  }

  static async getCurrentUser(): Promise<User | null> {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }

  static onAuthStateChange(callback: (user: User | null) => void) {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      callback(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }
}
