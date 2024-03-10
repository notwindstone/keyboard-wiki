import NavBar from "../components/NavBar.tsx";
import {ActionIcon, Flex} from "@mantine/core";
import TitleBar from "../components/TitleBar.tsx";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {IconMenu2} from "@tabler/icons-react";
import {useRouterState} from "@tanstack/react-router";
import MobileSidebar from "./MobileSidebar.tsx";

const Header = () => {
    const mobileWidth = useMediaQuery('(max-width: 768px)')
    const guidePage = useRouterState().location.pathname.includes("/guide")

    const [hidden, { toggle }] = useDisclosure(true)

    return (
        <header className="header">
            <MobileSidebar hidden={hidden} />
            <Flex
                className="header__body"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
            >
                {
                    mobileWidth ? (
                        <>
                            {
                                guidePage ? (
                                    <ActionIcon onClick={toggle} variant="light">
                                        <IconMenu2 className="header__mobile-sidebar-toggle" />
                                    </ActionIcon>
                                ) : []
                            }
                            <TitleBar />
                            <NavBar isMobile={true} />
                        </>
                    ) : (
                        <>
                            <TitleBar />
                            <NavBar isMobile={false} />
                        </>
                    )
                }
            </Flex>
        </header>
    )
}

export default Header