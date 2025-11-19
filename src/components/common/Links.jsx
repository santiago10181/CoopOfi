const Links = ({ text, href="#" , className}) => {
    return (
        <a href={href} className={`text-lg font-medium text-black ${className}`}>{text}</a>
    )
}
export default Links;