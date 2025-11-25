import { Link } from 'react-router-dom';

const Button = ({ text, className, href = "#" }) => {
    return (
        <Link 
            to={href} 
            className={`${className}`}>
            {text}
        </Link>
    );
}

export default Button;
