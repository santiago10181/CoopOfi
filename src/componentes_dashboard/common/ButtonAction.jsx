const ButtonAction = ({action}) => {
    return (
        <button className="px-6 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 rounded-full text-sm font-medium transition-colors">
            {action}
        </button>
    )
}
export default ButtonAction