"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
export default function RegisterPage(){
 const router=useRouter();
 return <div className="container-app grid min-h-screen place-items-center py-10"><div className="w-full max-w-lg">
  <div className="mb-6 flex justify-center"><Logo/></div>
  <div className="card p-6 sm:p-8">
   <h1 className="text-3xl font-black">Crear cuenta</h1><p className="mt-2 muted">Únete a tu comunidad y empieza a compartir recursos.</p>
   <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={e=>{e.preventDefault();router.push("/dashboard")}}>
    <div><label className="label">Nombre</label><input className="input" defaultValue="Juan Carlos Perez Hernández"/></div>
    <div><label className="label">Zona</label><input className="input" defaultValue="San Miguel Tecamachalco"/></div>
    <div className="sm:col-span-2"><label className="label">Correo</label><input className="input" type="email" defaultValue="juan.carlos@vecired.demo"/></div>
    <div className="sm:col-span-2"><label className="label">Contraseña</label><input className="input" type="password" defaultValue="VeciRed2026!"/></div>
    <button className="btn btn-primary sm:col-span-2">Crear cuenta y entrar</button>
   </form>
   <p className="mt-5 text-center text-sm muted">¿Ya tienes cuenta? <Link href="/login" className="font-bold text-emerald-700">Iniciar sesión</Link></p>
  </div>
 </div></div>
}
