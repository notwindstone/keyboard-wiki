import {Button} from "@mantine/core";
import {Link} from "@tanstack/react-router";

const SideNav = () => {
    return (
        <div className="sidebar__body">
            <Button variant="filled" component={Link} to="/guide/" className="sidebar__item">Вернуться</Button>
            <hr className="sidebar__separator" />
            <Button variant="default" component={Link} to="/guide/intro" className="sidebar__item">Введение</Button>
            <Button variant="default" component={Link} to="/guide/kits" className="sidebar__item">Базы</Button>
            <Button variant="default" component={Link} to="/guide/keycaps" className="sidebar__item">Кейкапы</Button>
            <Button variant="default" component={Link} to="/guide/switches" className="sidebar__item">Свитчи</Button>
            <Button variant="default" component={Link} to="/guide/stabilizers" className="sidebar__item">Стабилизаторы</Button>
        </div>
    )
}

export default SideNav