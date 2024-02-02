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
import RotaModal from "../../components/RotaModal/RotaModal";
import useDebouncer from "../../hooks/debouncer";

export default function ClientesPage() {
    const [search, setSearch] = useState("");
    const [clientes, setClientes] = useState([]);

    const [hasInitialized, setHasInitialized] = useState(false);
    const [showInsertModal, setShowInsertModal] = useState(false);
    const [showRotaModal, setShowRotaModal] = useState(false);

    const debouncedSearch = useDebouncer(search, 400);

    const onSearch = useCallback(async (value) => {
        try {
            const data = await ClienteModel.list(value || null);
            setClientes(data.clientes);
        } catch (e) {
            toast.error("Ocorreu um erro ao listar os clientes");
        }
    }, []);

    const init = useCallback(async () => {
        onSearch();
        setHasInitialized(true);
    }, []);

    const refresh = async () => {
        setShowInsertModal(false);
        await init();
    };

    useEffect(() => {
        if (hasInitialized) {
            onSearch(debouncedSearch);
        }
    }, [debouncedSearch, onSearch]);

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
                <Button
                    className="menta"
                    onClick={() => setShowRotaModal(true)}
                >
                    Gerar Rota
                </Button>
            </form>
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
            <CreateClienteModal
                shown={showInsertModal}
                onClose={() => setShowInsertModal(false)}
                onSuccess={() => {
                    refresh();
                    toast.success("Cliente criado com sucesso");
                }}
            />
            <RotaModal
                shown={showRotaModal}
                onClose={() => setShowRotaModal(false)}
            />
        </SidebarLayout>
    );
}
