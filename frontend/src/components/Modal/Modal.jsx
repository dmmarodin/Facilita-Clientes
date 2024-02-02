import { createPortal } from "react-dom";
import "./modal.scss";
import ModalTitle from "./ModalTitle";

export default function Modal({ children, title, onClose, shown }) {
    const onClickModal = (e) => {
        e.stopPropagation();
    };

    const portal = createPortal(
        <>
            <div className="modal-container" onClick={onClose}>
                <div className="modal" onClick={onClickModal}>
                    <ModalTitle onClose={onClose}>{title}</ModalTitle>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal-portal")
    );

    return shown && portal;
}
