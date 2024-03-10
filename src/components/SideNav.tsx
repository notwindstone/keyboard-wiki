import {Button} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {
    IconCompass,
} from "@tabler/icons-react";
import SideNavItem from "./SideNavItem.tsx";
import sidebar from '../config/sidebar.json'

const SideNav = () => {


    return (
        <div className="sidebar__body">
            <Button leftSection={<IconCompass stroke={1.5}/>} justify="flex-start" variant="filled" component={Link}
                    to="/guide/" className="sidebar__item">Вернуться</Button>
            <SideNavItem title="Введение" sections={sidebar.intro} />
            <SideNavItem title="Базы" sections={sidebar.kits} />
            <SideNavItem title="Кейкапы" sections={sidebar.keycaps} />
            <SideNavItem title="Свитчи" sections={sidebar.switches} />
            <SideNavItem title="Стабилизаторы" sections={sidebar.stabilizers} />
        </div>
    )
}

export default SideNav