// src/pages/login_page/components/LoginBanner.jsx
export const LoginBanner = () => (
  <aside className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
      className="absolute inset-0 w-full h-full object-cover opacity-50"
      alt="Cooperativa Background"
    />
    <div className="relative z-10 p-20 self-end">
      <h1 className="text-6xl font-bold text-white leading-tight">
        Oficina <br /> <span className="text-[#FFD700]">Virtual</span>
      </h1>
    </div>
  </aside>
);