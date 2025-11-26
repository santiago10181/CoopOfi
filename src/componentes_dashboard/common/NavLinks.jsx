import { NavLink } from "react-router-dom";
const NavLinks = ({Name, to}) => {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                    ? 'bg-yellow-100 text-yellow-900' 
                    : 'text-gray-700 hover:bg-gray-100'}`
            }
        >
            <span className="text-xl">✨</span>
            <span className="text-sm font-medium">{Name}</span>
        </NavLink>
    )
}
export default NavLinks;