import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SidebarNavItem({
    title,
    icon,
    path,
    isSelected,
    onClick,
}) {
    const selectedClass = isSelected ? "selected" : "";
    return (
        <Link to={path} onClick={onClick}>
            <div className={`option ${selectedClass}`}>
                <FontAwesomeIcon className={"option-icon"} icon={icon} />
                <span className="option-title">{title}</span>
            </div>
        </Link>
    );
}
