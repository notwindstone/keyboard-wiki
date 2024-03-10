import SideNavItem from "../components/SideNavItem.tsx";
import sidebar from "../config/sidebar.json";

const MobileSidebar = (props: { hidden: boolean }) => {
    const { hidden } = props

    return (
        <aside className="mobile-sidebar" hidden={hidden}>
            <div className="mobile-sidebar__body">
                <SideNavItem title="Введение" sections={sidebar.intro}/>
                <SideNavItem title="Базы" sections={sidebar.kits}/>
                <SideNavItem title="Кейкапы" sections={sidebar.keycaps}/>
                <SideNavItem title="Свитчи" sections={sidebar.switches}/>
                <SideNavItem title="Стабилизаторы" sections={sidebar.stabilizers}/>
            </div>
        </aside>
    )
}

export default MobileSidebar