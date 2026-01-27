export const TableBodyData = ({main,complement,Children}) => {
    return (
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-bold text-gray-900">
                {main}
            </div>
            <div className="text-xs text-gray-500 font-medium bg-gray-100 inline-block px-2 py-0.5 rounded-md mt-1">
                {complement}
            </div>
            {Children}
        </td>
    )
};