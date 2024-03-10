import {Link} from "@tanstack/react-router";
import {Button, Flex} from "@mantine/core";
import ThemeScheme from "./ThemeScheme.tsx";
import TelegramLink from "./TelegramLink.tsx";

const NavBar = (props: { isMobile: boolean }) => {
    const { isMobile } = props

    if (isMobile) {
        return (
            <>
                <ThemeScheme />
            </>
        )
    }

    return (
        <nav>
            <Flex
                justify="flex-end"
                align="center"
                gap="sm"
            >
                <Button component={Link} to="/" variant="light">Главная</Button>
                <Button component={Link} to="/guide" variant="light">Гайд</Button>
                <Button component={Link} to="/resources" variant="light">Ресурсы</Button>
                <TelegramLink />
                <ThemeScheme />
            </Flex>
        </nav>
    )
}

export default NavBar