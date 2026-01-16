const SUGGESTIONS = [
  { id: 1, label: "💰 Consultar mi Saldo" },
  { id: 2, label: "📄 Pedir Certificado" },
  { id: 3, label: "💳 Pagar Cuota" },
];

export const ChatRecommendations = () => {
  return (
    <div className="flex justify-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {SUGGESTIONS.map((item) => (
        <button
          key={item.id}
          className="
            px-4 py-1.5 rounded-full text-xs text-gray-500 bg-white border border-gray-100
            hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 transition-all cursor-pointer shadow-sm
          "
          onClick={() => console.log(item.label)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};