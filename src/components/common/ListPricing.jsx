import { Check } from 'lucide-react';

const ListPricing = ({Description, i}) => {
    return (
        <li key={i} className="flex items-center justify-center md:justify-start text-[#1a1a1a]/80 font-medium">
                <Check className="w-5 h-5 mr-2 flex-shrink-0 opacity-50" />
                {Description}
        </li>
    )
}
export default ListPricing;