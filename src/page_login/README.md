# Documentación del Módulo de Login

Este documento detalla la estructura y funcionalidad de los componentes y hooks que conforman la página de inicio de sesión de la Oficina Virtual.

## Estructura de Archivos

```
page_login/
├── components/
│   ├── ui/
│   │   └── PrimaryButton.jsx
│   ├── AuthInput.jsx
│   └── LoginBanner.jsx
├── hooks/
│   └── useLoginForm.js
└── LoginPage.jsx
```

---

## Componentes Principales

### `LoginPage.jsx`

Es el componente principal que ensambla toda la página de inicio de sesión.

- **Responsabilidad:** Orquestar la presentación de la interfaz de login, combinando el banner, el formulario y los campos de entrada.
- **Integraciones:**
  - Utiliza `LoginBanner` para mostrar la sección visual de la marca.
  - Emplea `AuthInput` para los campos de correo y contraseña.
  - Usa `PrimaryButton` para el botón de envío.
  - Implementa el hook `useLoginForm` para gestionar toda la lógica y el estado del formulario.

---

## Componentes Reutilizables

### `components/AuthInput.jsx`

Componente de campo de texto diseñado específicamente para formularios de autenticación.

- **Props:**
  - `label`: El texto que se muestra encima del campo.
  - `icon`: Un componente de ícono (de `lucide-react`) para mostrar dentro del campo.
  - `error`: El objeto de error de `react-hook-form` para mostrar mensajes de validación.
  - `register`: La función `register` de `react-hook-form` para vincular el campo al estado del formulario.
- **Funcionalidad:**
  - Muestra un ícono a la izquierda del campo.
  - Cambia su estilo (color de borde y fondo) si hay un error de validación.
  - Muestra un mensaje de error debajo del campo.

### `components/ui/PrimaryButton.jsx`

Botón principal utilizado para acciones importantes, como el envío de un formulario.

- **Props:**
  - `children`: El contenido del botón (texto).
  - `icon`: Un componente de ícono opcional para mostrar a la derecha del texto.
  - `isLoading`: Un booleano que activa el estado de carga.
- **Funcionalidad:**
  - Cuando `isLoading` es `true`, el botón se deshabilita, muestra el texto "Cargando..." y el contenido principal se oculta.
  - Muestra un efecto de "pulse" en el texto mientras carga.
  - Incluye un ícono si se le proporciona.

### `components/LoginBanner.jsx`

Componente visual que muestra el banner izquierdo en la página de login en pantallas grandes.

- **Funcionalidad:**
  - Muestra una imagen de fondo con opacidad.
  - Presenta el título "Oficina Virtual" con un estilo destacado.
  - Está diseñado para ser estético y no contiene lógica de negocio.

---

## Hooks

### `hooks/useLoginForm.js`

Hook personalizado que encapsula toda la lógica del formulario de inicio de sesión.

- **Responsabilidad:** Manejar el estado, la validación y el envío del formulario.
- **Librerías:** Utiliza `react-hook-form` para una gestión eficiente y declarativa del formulario.
- **Funciones Expuestas:**
  - `register`: Para registrar los campos en `react-hook-form`.
  - `handleSubmit`: Para envolver la función de envío y gestionar la validación.
  - `handleLogin`: La función que se ejecuta al enviar el formulario. Simula una llamada a una API con un retardo de 2 segundos.
  - `formState`: Proporciona acceso a los errores (`errors`) y al estado de envío (`isSubmitting`).
