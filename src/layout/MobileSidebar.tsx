import SideNavItem from "../components/SideNavItem.tsx";
import sidebar from "../config/sidebar.json";
import {Button} from "@mantine/core";
import {IconCompass} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";

const MobileSidebar = (props: { hidden: boolean }) => {
    const { hidden } = props

    return (
        <aside className="mobile-sidebar" hidden={hidden}>
            <div className="mobile-sidebar__body">
                <Button leftSection={<IconCompass stroke={1.5}/>} justify="flex-start" variant="filled" component={Link}
                        to="/guide/" className="sidebar__item">Вернуться</Button>
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