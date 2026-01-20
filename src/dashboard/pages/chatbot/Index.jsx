import { ChatWindow } from "./chatWindow/ChatWindow"; // Ajusta la ruta

const DashboardChatBot = () => {
  return (
    <div className="h-[calc(100vh-100px)] w-full max-w-5xl mx-auto p-2">
      {/* h-[calc(100vh-100px)] -> Ajuste para restar el header del dashboard 
        max-w-5xl -> Para que no se estire infinitamente en pantallas ultra-wide
      */}
      <ChatWindow />
    </div>
  );
};

export default DashboardChatBot;