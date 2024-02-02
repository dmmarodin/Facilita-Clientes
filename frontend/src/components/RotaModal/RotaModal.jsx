import { useEffect } from "react";
import Modal from "../Modal/Modal";
import Table from "../Table/Table";

export default function RotaModal({ shown, onClose }) {
    const init = async () => {
        //carregar resultado
        console.log(shown);
    };

    useEffect(() => {
        init();
    }, [init]);

    return (
        <Modal shown={shown} onClose={onClose} title="Rota Mais Rápida">
            <p>
                A rota mais rápida de viagem entre seus clientes possui a
                seguinte ordem:
            </p>
        </Modal>
    );
}
