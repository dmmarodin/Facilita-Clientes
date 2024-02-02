import "./clientesListPage.scss";
import { faPencil, faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import SidebarLayout from "../../layouts/SidebarLayout/SidebarLayout";
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import { ClienteModel } from "../../models/clienteModel";
import { toast } from "react-toastify";
import Table from "../../components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateClienteModal from "../../components/CreateClienteModal/CreateClienteModal";

export default function ClientesPage() {
    const [search, setSearch] = useState("");
    const [clientes, setClientes] = useState([]);
    const [showInsertModal, setShowInsertModal] = useState(false);

    const init = useCallback(async () => {
        try {
            const data = await ClienteModel.list();
            setClientes(data.clientes);
        } catch (e) {
            toast.error("Ocorreu um erro. Tente novamente.");
        }
    }, []);

    const refresh = async () => {
        setShowInsertModal(false);
        await init();
    };

    useEffect(() => {
        init();
    }, [init]);

    const onSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <SidebarLayout>
            <PageTitle>Clientes</PageTitle>
            <form onSubmit={onSubmit} id="search-form">
                <Input
                    title={"Nome"}
                    placeholder={"Nome, e-mail, telefone..."}
                    value={search}
                    setter={setSearch}
                    icon={faSearch}
                    maxWidth={500}
                    className="flex-1"
                />
                <Button
                    className="azul"
                    onClick={() => setShowInsertModal(true)}
                >
                    Cadastrar
                </Button>
                <Button className="menta">Gerar Rota</Button>
            </form>
            <Table
                rows={clientes}
                headers={["Nome", "E-mail", "Telefone", "Coordenadas"]}
                component={({ data }) => (
                    <tr key={data.id}>
                        <td>{data.nome}</td>
                        <td>{data.email}</td>
                        <td>{data.telefone}</td>
                        <td>
                            [{data.coord_x}, {data.coord_y}]
                        </td>
                    </tr>
                )}
            />
            <CreateClienteModal
                shown={showInsertModal}
                onClose={() => setShowInsertModal(false)}
                onSuccess={() => {
                    refresh();
                    toast.success("Cliente criado com sucesso");
                }}
            />
        </SidebarLayout>
    );
}
