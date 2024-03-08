import {Flex, ThemeIcon} from "@mantine/core";
import { IconKeyboard } from '@tabler/icons-react';

const TitleBar = () => {
    return (
        <div>
            <Flex
                justify="flex-start"
                align="center"
                gap="sm"
            >
                <ThemeIcon variant="gradient">
                    <IconKeyboard stroke={1.5} />
                </ThemeIcon>
                <h1 className="header__title">HolyBoards</h1>
            </Flex>
        </div>
    )
}

export default TitleBar