import SideNav from "../components/SideNav.tsx";
import BreadcrumbsBar from "../components/BreadcrumbsBar.tsx";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <BreadcrumbsBar />
            <SideNav />
        </aside>
    )
}

export default Sidebar