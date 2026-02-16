import {HeaderTableContent} from '../../../components/TableHeadContent'
export const TableHeaderRow = () => {
    return (
        <thead className="bg-gray-50/50">
            <tr className="bg-gray-50/50">
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'ID Solicitud'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Detalles'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Tipo'}   />
                <HeaderTableContent className={"flex items-center justify-center px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Estado'}   />
                <HeaderTableContent className={"px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"}
                    data={'Acciones'}   />
            </tr>
        </thead>
    );
}
