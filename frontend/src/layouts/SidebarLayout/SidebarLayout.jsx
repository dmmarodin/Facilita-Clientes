import Sidebar from "../../components/sidebar/Sidebar";
import "./sidebarLayout.scss";

export default function SidebarLayout(props) {
    return (
        <div id="sidebar-layout">
            <Sidebar />
            <main>{props.children}</main>
        </div>
    );
}
