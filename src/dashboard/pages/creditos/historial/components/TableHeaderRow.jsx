import {HeaderTableContent} from '../../../components/TableHeadContent'
export const TableHeaderRow = () => {
    return (
        <thead className="bg-gray-50/50">
            <tr>
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'ID Solicitud'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Detalles del Crédito'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Valor & Plazo'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Estado'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Acciones'}   />
            </tr>
        </thead>
    );
}
