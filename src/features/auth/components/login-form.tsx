"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Escribe un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});
type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "juan.carlos@vecired.demo", password: "VeciRed2026!" }
  });

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit(async () => router.push("/dashboard"))}>
      <div>
        <label className="label" htmlFor="email">Correo</label>
        <input id="email" className="input" type="email" {...register("email")} />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="label" htmlFor="password">Contraseña</label>
        <input id="password" className="input" type="password" {...register("password")} />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
      </div>
      <button disabled={isSubmitting} className="btn btn-primary w-full">{isSubmitting ? "Entrando..." : "Entrar"}</button>
    </form>
  );
}
