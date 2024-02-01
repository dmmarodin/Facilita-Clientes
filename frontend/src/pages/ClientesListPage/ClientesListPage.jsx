import "./clientesListPage.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import SidebarLayout from "../../layouts/SidebarLayout/SidebarLayout";
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import { ClienteModel } from "../../models/clienteModel";
import { toast } from "react-toastify";

export default function ClientesPage() {
    const [search, setSearch] = useState("");
    const [clientes, setClientes] = useState([]);

    const init = useCallback(async () => {
        try {
            const data = await ClienteModel.list();
            setClientes(data.clientes);
        } catch (e) {
            toast.error("Ocorreu um erro. Tente novamente.");
        }
    }, []);

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
                <Button className="azul">Cadastrar</Button>
                <Button className="menta">Gerar Rota</Button>
            </form>
            <table>
                <tbody>
                    {clientes.map((v) => (
                        <tr key={v.id}>
                            <td>{v.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </SidebarLayout>
    );
}
