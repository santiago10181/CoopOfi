const Links = ({ text, href="#" , className}) => {
    return (
        <a href={href} className={`font-medium text-black ${className}`}>{text}</a>
    )
}
export default Links;