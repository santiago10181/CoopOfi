const ListFoot = ({ text1, text2 }) => {
    return(
        <div>
            <h4 className="font-bold text-[#1a1a1a] text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">{text1}</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">{text2}</a></li>
            </ul>
        </div>
    )
}
export default ListFoot;