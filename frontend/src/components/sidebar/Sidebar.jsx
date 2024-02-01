import Logo from "../Logo/Logo";
import "./sidebar.scss";
import SidebarNav from "./SidebarNav";
import SidebarUser from "./SidebarUser";

export default function Sidebar() {
    return (
        <div id="sidebar">
            <div className="sidebar-logo">
                <Logo width={150} />
            </div>
            <SidebarUser />
            <SidebarNav />
        </div>
    );
}
