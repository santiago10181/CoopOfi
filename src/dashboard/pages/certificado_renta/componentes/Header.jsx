const Header = ({Title, Description}) => {
    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              {Title}
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-6 text-slate-500">
              {Description}
              para tus trámites y consultas.
            </p>
        </div>
    )
}

export default Header;