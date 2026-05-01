// src/components/LayoutForms.jsx
import { ButtonBack } from "./ButtonBack";

export const LayoutForms = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50/50 px-6 py-6 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        <ButtonBack />
        {children}
      </div>
    </div>
  );
};
