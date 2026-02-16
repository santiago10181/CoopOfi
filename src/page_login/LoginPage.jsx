// src/pages/login_page/LoginPage.jsx
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useLoginForm } from "./hooks/useLoginForm";
import { AuthInput } from "./components/AuthInput";
import { PrimaryButton } from "./components/ui/PrimaryButton";
import { LoginBanner } from "./components/LoginBanner";

const LoginPage = () => {
  const { register, handleSubmit, handleLogin, formState: { errors, isSubmitting } } = useLoginForm();

  return (
    <div className="flex min-h-screen">
      <LoginBanner />

      <main className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <section className="w-full max-w-md">
          <header className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900">Ingresa ahora</h2>
            <p className="text-gray-500 mt-2 font-medium">Bienvenido de nuevo, asociado.</p>
          </header>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            <AuthInput
              label="Correo electrónico"
              type="email"
              icon={Mail}
              error={errors.email}
              register={register("email", { required: "El correo es obligatorio" })}
            />

            <AuthInput
              label="Contraseña"
              type="password"
              icon={Lock}
              error={errors.password}
              register={register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.root && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 text-sm font-medium">{errors.root.message}</p>
              </div>
            )}

            <PrimaryButton type="submit" isLoading={isSubmitting} icon={ArrowRight}>
              Acceder al portal
            </PrimaryButton>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;