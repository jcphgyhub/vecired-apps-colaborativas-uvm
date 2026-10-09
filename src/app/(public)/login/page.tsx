"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { ShieldCheck } from "lucide-react";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage(){
  const router = useRouter();
  return (
    <div className="container-app grid min-h-screen place-items-center py-10">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center"><Logo/></div>
        <div className="card p-6 sm:p-8">
          <div className="badge badge-green mb-4"><ShieldCheck size={14}/> Demo seguro</div>
          <h1 className="text-3xl font-black">Iniciar sesión</h1>
          <p className="mt-2 muted">Accede a VeciRed y prueba los flujos con datos demo.</p>
          <LoginForm/>
          <button onClick={()=>router.push("/dashboard")} className="btn btn-soft mt-3 w-full">Entrar directamente al demo</button>
          <p className="mt-5 text-center text-sm muted">¿No tienes cuenta? <Link href="/register" className="font-bold text-emerald-700">Crear cuenta</Link></p>
        </div>
      </div>
    </div>
  );
}
