import { useCallback, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Table from "../Table/Table";
import { RotaModel } from "../../models/rotaModel";
import { toast } from "react-toastify";

export default function RotaModal({ shown, onClose }) {
    const [clientes, setClientes] = useState([]);

    const init = useCallback(async () => {
        try {
            const result = await RotaModel.get();
            setClientes(result.clientes);
        } catch (_) {
            toast.error("Erro ao calcular a melhor rota");
        }
    }, []);

    useEffect(() => {
        if (shown) {
            init();
        }
    }, [init, shown]);

    return (
        <Modal shown={shown} onClose={onClose} title="Rota Mais Rápida">
            <p>A rota com a menor distância máxima até seus clientes é:</p>
            <Table
                rows={clientes}
                headers={["Nome", "E-mail", "Telefone", "Coordenadas"]}
                component={({ data }) => (
                    <tr>
                        <td>{data.nome}</td>
                        <td>{data.email}</td>
                        <td>{data.telefone}</td>
                        <td>
                            [{data.coord_x}, {data.coord_y}]
                        </td>
                    </tr>
                )}
            />
        </Modal>
    );
}
