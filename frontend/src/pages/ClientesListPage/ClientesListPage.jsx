import "./clientesListPage.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import SidebarLayout from "../../layouts/SidebarLayout/SidebarLayout";
import { useState } from "react";
import Button from "../../components/Button/Button";

export default function ClientesPage() {
    const [search, setSearch] = useState("");

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
        </SidebarLayout>
    );
}
