import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalTitle({ children, onClose }) {
    return (
        <div className="modal-title">
            <h2>{children}</h2>
            <FontAwesomeIcon
                className="icon"
                icon={faClose}
                size="lg"
                onClick={onClose}
            />
        </div>
    );
}
