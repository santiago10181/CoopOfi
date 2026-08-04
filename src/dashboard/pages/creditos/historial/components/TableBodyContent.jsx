// src/pages/dashboard/credits/components/TableBodyContent.jsx
import {TableBodyData} from '../../../components/TableBodyData';
import {AccionsTableData} from '../../../components/AccionsTableData';
import { ArrowUpRight } from 'lucide-react';

export const TableBodyContent = ({Id, Fecha, Tipo, Valor, Plazo, children}) => {
    return (
        <tr 
            className="hover:bg-yellow-50/30 transition-colors duration-150 group"
        >
            {/* ID & FECHA */}
            <TableBodyData main={Fecha} complement={Id} />

            {/* TIPO */}
            <TableBodyData main={Tipo} >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black flex items-center justify-center text-[#FFD700]">
                    <ArrowUpRight className="h-5 w-5" />
                </div>
            </TableBodyData>

            {/* VALOR */}
            <TableBodyData main={Valor} complement={Plazo} />

            {/* ESTADO */}
            <td className="px-6 py-4 whitespace-nowrap text-center">
                {children}
            </td>

            {/* ACCIONES */}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <AccionsTableData />
            </td>
        </tr>
    );
};