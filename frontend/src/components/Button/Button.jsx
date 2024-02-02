import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.scss";

export default function Button({
    icon,
    onClick,
    className = "",
    type = "button",
    children,
}) {
    return (
        <button className={`button ${className}`} onClick={onClick} type={type}>
            <span>{children}</span>
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        </button>
    );
}
