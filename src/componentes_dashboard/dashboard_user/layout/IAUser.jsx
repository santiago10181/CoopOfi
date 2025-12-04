import ContentDashboard from "../../frame/FrameToChild";
const DashboardUser = () => {
    return (
        <div className="max-w-4xl mx-auto px-10 py-20">
            {/* Input de búsqueda */}
            <div className="relative mb-8">
              <Input />
              <ButtonSend />
            </div>

            {/* Botones de acciones rápidas */}
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonAction action="Consultar mi saldo" />
              <ButtonAction action="Pagar mi préstamo" />
              <ButtonAction action="Actualizar mis datos" />
            </div>
        </div>
    )
};

export default DashboardUser;