import {Button} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {
    IconCompass,
} from "@tabler/icons-react";
import SideNavItem from "./SideNavItem.tsx";

const SideNav = () => {
    const intro = [
        {
            "paragraphName": "Параграф 1",
            "link": "/guide/intro#anatomy"
        },
        {
            "paragraphName": "Параграф 2",
            "link": "/guide/intro#something"
        }
    ]

    return (
        <div className="sidebar__body">
            <Button leftSection={<IconCompass stroke={1.5}/>} justify="flex-start" variant="filled" component={Link}
                    to="/guide/" className="sidebar__item">Вернуться</Button>
            <SideNavItem title="Введение" sections={intro} />
            <Button variant="default" component={Link} to="/guide/kits" className="sidebar__item">Базы</Button>
            <Button variant="default" component={Link} to="/guide/keycaps" className="sidebar__item">Кейкапы</Button>
            <Button variant="default" component={Link} to="/guide/switches" className="sidebar__item">Свитчи</Button>
            <Button variant="default" component={Link} to="/guide/stabilizers"
                    className="sidebar__item">Стабилизаторы</Button>
        </div>
    )
}

export default SideNav