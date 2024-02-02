import "./createClienteModal.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import ModalFooter from "../Modal/ModalFooter";
import ModalTitle from "../Modal/ModalTitle";
import { validatePhone } from "../../validation";
import { toast } from "react-toastify";
import { ClienteModel } from "../../models/clienteModel";

export default function CreateClienteModal({ shown, onClose, onSuccess }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [coordX, setCoordX] = useState("");
    const [coordY, setCoordY] = useState("");

    const close = () => {
        setNome("");
        setEmail("");
        setTelefone("");
        setCoordX("");
        setCoordY("");
        onClose && onClose();
    };

    const onSave = async (e) => {
        e.preventDefault();

        if (!validatePhone(telefone)) {
            toast.error("Telefone Inválido");
            return;
        }

        try {
            await ClienteModel.create({
                nome,
                email,
                telefone,
                coord_x: parseInt(coordX),
                coord_y: parseInt(coordY),
            });
            onSuccess && onSuccess();
        } catch (e) {
            toast.error("Erro ao salvar o cliente");
        }
    };

    return (
        <Modal shown={shown} title="Cadastrar Cliente" onClose={close}>
            <form id="create-cliente-form" onSubmit={onSave}>
                <Input value={nome} setter={setNome} title="Nome" required />
                <Input
                    value={email}
                    setter={setEmail}
                    title="E-mail"
                    type="email"
                    required
                />
                <Input
                    value={telefone}
                    setter={setTelefone}
                    type="phone"
                    title="Telefone"
                    required
                />
                <div id="create-cliente-coords">
                    <Input
                        value={coordX}
                        setter={setCoordX}
                        type="number"
                        title="Posição X"
                        required
                    />
                    <Input
                        value={coordY}
                        setter={setCoordY}
                        type="number"
                        title="Posição Y"
                        required
                    />
                </div>
                <ModalFooter>
                    <Button className="cinza" onClick={close}>
                        Cancelar
                    </Button>
                    <Button className="verde" type="submit">
                        Salvar
                    </Button>
                </ModalFooter>
            </form>
        </Modal>
    );
}
