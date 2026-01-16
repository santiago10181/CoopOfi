import { Bot, User } from "lucide-react";
import { ChatInput } from "../../components/ChatInput";
import { ChatRecommendations } from "../../components/ChatRecommendations";

export const ChatWindow = () => {
  // Simulamos estado: true = chat vacío (inicio), false = ya hay conversación
  const isChatEmpty = true; 

  return (
    <div className="flex flex-col h-full bg-white relative">
      
      {/* 1. Header Minimalista (Casi invisible, solo branding sutil) */}
      {!isChatEmpty && (
        <div className="absolute top-0 w-full p-4 flex justify-between items-center bg-white/80 backdrop-blur-sm z-10 border-b border-gray-50">
          <span className="font-semibold text-gray-700 text-sm">CoopOfi <span className="text-[#FFD500]">AI</span></span>
        </div>
      )}

      {/* 2. Área Central */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto p-4 w-full max-w-3xl mx-auto">
        
        {isChatEmpty ? (
          /* ESTADO VACÍO (Tipo Google) */
          <div className="flex flex-col items-center justify-center space-y-6 mb-10 opacity-90">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FFD500] mb-2 shadow-sm">
              <Bot size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
              ¿En qué puedo ayudarte hoy?
            </h2>
          </div>
        ) : (<></>)}
      </div>

      {/* 3. Footer Flotante */}
      <div className="w-full bg-white pb-2">
        {/* Solo mostramos recomendaciones si el chat está "vacío" o el usuario acaba de preguntar algo */}
        {isChatEmpty && <ChatRecommendations />}
        <ChatInput />
      </div>
    </div>
  );
};