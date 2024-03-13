import {useState} from "react";
import {Box, Collapse, Group, rem, ThemeIcon, UnstyledButton} from "@mantine/core";
import classes from "../LinksGroup/LinksGroup.module.css";
import {
    IconBook2,
    IconChevronRight,
    IconDirections,
    IconExternalLink, IconFoldDown,
    IconHome, IconKeyboard, IconMenu,
    IconSquare
} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";

interface LinksGroupProps {
    title: string;
    navbarLink?: string;
    initiallyOpened?: boolean;
    content?: { title: string; link: string }[];
}

const LinksGroup = ({ title, navbarLink, initiallyOpened, content }: LinksGroupProps) => {
    const hasLinks = Array.isArray(content);
    const [opened, setOpened] = useState(initiallyOpened || false);
    const items = (hasLinks ? content : []).map((link) => (
        <Link
            className={classes.link}
            to={link.link}
            key={link.title}
        >
            {link.title}
        </Link>
    ));

    let icon

    switch (title) {
        case "Главная":
            icon = (
                <IconHome />
            )
            break
        case "Гайд":
            icon = (
                <IconBook2 />
            )
            break
        case "Основы":
            icon = (
                <IconDirections />
            )
            break
        case "Базы для клавиатур":
            icon = (
                <IconKeyboard />
            )
            break
        case "Свитчи":
            icon = (
                <IconFoldDown />
            )
            break
        case "Кейкапы":
            icon = (
                <IconSquare />
            )
            break
        case "Стабилизаторы":
            icon = (
                <IconMenu />
            )
            break
        default:
            icon = (
                <IconExternalLink />
            )
            break
    }

    if (navbarLink) {
        return (
            <UnstyledButton component={Link} to={navbarLink} className={classes.control}>
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" color="violet" size="xl">
                            {icon}
                        </ThemeIcon>
                        <Box ml="md">{title}</Box>
                    </Box>
                </Group>
            </UnstyledButton>
        )
    }

    return (
        <>
            <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" color="violet" size="xl">
                            {icon}
                        </ThemeIcon>
                        <Box ml="md">{title}</Box>
                    </Box>
                    {hasLinks && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            style={{
                                width: rem(24),
                                height: rem(24),
                                transform: opened ? 'rotate(-90deg)' : 'none',
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    );
}

export default LinksGroup