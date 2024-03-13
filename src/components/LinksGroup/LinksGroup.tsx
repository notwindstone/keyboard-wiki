import {useState} from "react";
import {Box, Collapse, Group, rem, ThemeIcon, UnstyledButton} from "@mantine/core";
import classes from "../NavbarLinksGroup/NavbarLinksGroup.module.css";
import {IconChevronRight, IconNavigationBolt} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";

interface LinksGroupProps {
    title: string;
    initiallyOpened?: boolean;
    content?: { title: string; link: string }[];
}

const LinksGroup = ({ title, initiallyOpened, content }: LinksGroupProps) => {
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

    return (
        <>
            <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" color="violet" size={30}>
                            <IconNavigationBolt style={{ width: rem(18), height: rem(18) }} />
                        </ThemeIcon>
                        <Box ml="md">{title}</Box>
                    </Box>
                    {hasLinks && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            style={{
                                width: rem(16),
                                height: rem(16),
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