import { create } from 'zustand';

export const useChatStore = create((set) => ({
  isOpen: false,
  // Mensaje inicial de bienvenida
  messages: [
    { id: 1, text: "Hola Santiago, ¿en qué te puedo ayudar hoy?", sender: 'bot' }
  ],
  
  // Acción para abrir/cerrar
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  
  // Acción para agregar mensaje
  addMessage: (text, sender) => set((state) => ({
    messages: [...state.messages, { id: Date.now(), text, sender }]
  }))
}));