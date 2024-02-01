import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarNavItem from "./SidebarNavItem";

export default function Nav() {
    return (
        <nav id="sidebar-nav">
            <div className="title-nav">Navegação</div>
            <ul class="nav-items">
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
                    />
                </li>
            </ul>
        </nav>
    );
}
