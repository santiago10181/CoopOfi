// src/page_login/LoginPage.jsx
import { ArrowRight, Lock, Mail } from "lucide-react";

import { AuthInput } from "./components/AuthInput";
import { LoginBanner } from "./components/LoginBanner";
import { PrimaryButton } from "./components/ui/PrimaryButton";
import { useLoginForm } from "./hooks/useLoginForm";

/**
 * Pantalla de acceso única para asociados y personal administrativo.
 * El backend identifica el rol después de validar las credenciales.
 */
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    handleLogin,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  return (
    <div className="flex min-h-screen">
      <LoginBanner />

      <main className="flex w-full items-center justify-center bg-white p-6 lg:w-1/2">
        <section className="w-full max-w-md">
          <header className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Ingresa ahora
            </h1>

            <p className="mt-2 font-medium text-gray-500">
              Bienvenido a la Oficina Virtual CoopOfi.
            </p>
          </header>

          <form
            noValidate
            className="space-y-6"
            onSubmit={handleSubmit(handleLogin)}
          >
            <AuthInput
              id="email"
              label="Correo electrónico"
              type="email"
              autoComplete="email"
              icon={Mail}
              error={errors.email}
              register={register("email", {
                required: "El correo es obligatorio.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Ingresa un correo electrónico válido.",
                },
              })}
            />

            <AuthInput
              id="password"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              icon={Lock}
              error={errors.password}
              register={register("password", {
                required: "La contraseña es obligatoria.",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres.",
                },
              })}
            />

            {errors.root ? (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-4"
              >
                <p className="text-sm font-medium text-red-700">
                  {errors.root.message}
                </p>
              </div>
            ) : null}

            <PrimaryButton
              type="submit"
              icon={ArrowRight}
              isLoading={isSubmitting}
            >
              Acceder al portal
            </PrimaryButton>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;