import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarNavItem from "./SidebarNavItem";
import { toast } from "react-toastify";

export default function Nav() {
    return (
        <nav id="sidebar-nav">
            <div className="title-nav">Navegação</div>
            <ul className="nav-items">
                <li>
                    <SidebarNavItem
                        title="Clientes"
                        icon={faUser}
                        isSelected={true}
                        path="/"
                    />
                    <SidebarNavItem
                        title="Configurações"
                        icon={faCog}
                        path="#"
                        onClick={() => toast.error("Ainda não implementado!")}
                    />
                </li>
            </ul>
        </nav>
    );
}
