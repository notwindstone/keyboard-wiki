import {Button} from "@mantine/core";
import {Link, useRouterState} from "@tanstack/react-router";

const SideNav = () => {
    const currentRoute = useRouterState().location.pathname + "#anatomy"

    return (
        <div className="sidebar__body">
            <Button component={Link} to={currentRoute}>123</Button>
        </div>
    )
}

export default SideNav