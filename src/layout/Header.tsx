import NavBar from "../components/NavBar.tsx";
import {Flex} from "@mantine/core";
import TitleBar from "../components/TitleBar.tsx";

const Header = () => {
    return (
        <header className="header">
            <Flex
                className="header__body"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <TitleBar />
                <NavBar />
            </Flex>
        </header>
    )
}

export default Header