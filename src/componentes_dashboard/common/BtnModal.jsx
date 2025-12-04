const BtnModal = ({ onClick, value }) => {
    return (
        <button
          type="button"
          onClick={() => onClick(value)}
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-colors"
          value={value}
        >
          <span className="mr-2 text-lg">＋</span>
          Nueva solicitud
        </button>
    )
};
export default BtnModal;