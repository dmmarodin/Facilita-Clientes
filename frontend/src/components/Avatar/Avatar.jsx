import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./avatar.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Avatar({ size }) {
    // Abaixo é usado um razão para escalar o ícone em relação
    // ao div do avatar.

    const total = size || 35;
    return (
        <div
            className="avatar"
            style={{ width: total + "px", height: total + "px" }}
        >
            <FontAwesomeIcon
                className="icon"
                icon={faUser}
                fontSize={total / 1.3}
            />
        </div>
    );
}
