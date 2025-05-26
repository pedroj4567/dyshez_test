import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string({ required_error: "Nombre es requerido" })
      .min(2, "Mínimo 2 caracteres")
      .max(50, "Máximo 50 caracteres")
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras permitidas"),

    lastName: z
      .string({ required_error: "Apellido es requerido" })
      .min(2, "Mínimo 2 caracteres")
      .max(50, "Máximo 50 caracteres")
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras permitidas"),

    mobilePhone: z
      .string({ required_error: "Teléfono móvil es requerido" })
      .min(10, "Teléfono inválido (mínimo 10 dígitos)")
      .regex(/^[0-9]+$/, "Solo números permitidos"),

    landlinePhone: z
      .string()
      .regex(/^$|^[0-9]+$/, "Solo números permitidos")
      .optional()
      .transform((val) => val || undefined),

    website: z.string().url("URL inválida").optional().or(z.literal("")),

    email: z
      .string({ required_error: "Email es requerido" })
      .email("Email inválido")
      .max(100, "Máximo 100 caracteres"),

    password: z
      .string({ required_error: "Contraseña es requerida" })
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
      .regex(/[0-9]/, "Debe contener al menos un número")
      .regex(/[^a-zA-Z0-9]/, "Debe contener al menos un carácter especial"),

    confirmPassword: z.string({
      required_error: "Debes confirmar la contraseña",
    }),

    terms: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar los términos y condiciones" }),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
      });
    }

    if (data.mobilePhone.length < 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El teléfono móvil debe tener 10 dígitos",
        path: ["mobilePhone"],
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
