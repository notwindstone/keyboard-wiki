import {ActionIcon} from '@mantine/core';
import { IconBrandTelegram } from '@tabler/icons-react';
import {Link} from "@tanstack/react-router";

function ThemeScheme() {
    return (
        <ActionIcon
            component={Link}
            to="https://t.me/HolyBoards"
            variant="light"
            size="lg"
            aria-label="Toggle color scheme"
        >
            <IconBrandTelegram stroke={1.5} />
        </ActionIcon>
    );
}

export default ThemeScheme