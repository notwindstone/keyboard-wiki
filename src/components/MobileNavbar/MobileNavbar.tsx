import {AppShell, Burger, Grid, Group, ThemeIcon, Title, UnstyledButton} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconKeyboard } from '@tabler/icons-react';
import classes from './MobileNavbar.module.css';
import ThemeChanger from "../ThemeChanger/ThemeChanger.tsx";
import NavbarLinksGroup from "../NavbarLinksGroup/NavbarLinksGroup.tsx";
import {Link} from "@tanstack/react-router";
import {useEffect} from "react";

const MobileNavbar = ({ children }: any) => {
    const [opened, { toggle }] = useDisclosure();

    useEffect(() => {
        if (opened) {
            document.body.style.overflowY = 'hidden'
        }
        else {
            document.body.style.overflowY = 'scroll'
        }
        return () => {}
    }, [opened])

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'md', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header className={classes.header}>
                <Group h="100%" px="md" className={classes.header}>
                    <Grid
                        align="center"
                        justify="space-between"
                        style={{ width: '100%' }}
                    >
                        <Grid.Col span={{ base: 1.5, md: 4 }} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
                            <Group gap={0} visibleFrom="md">
                                <UnstyledButton component={Link} to="/" className={classes.control}>Главная</UnstyledButton>
                                <UnstyledButton component={Link} to="/articles" className={classes.control}>Гайд</UnstyledButton>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={{ base: 9, md: 4 }} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Group className={classes.titleBar}>
                                <ThemeIcon variant="gradient" gradient={{ from: 'violet', to: 'grape' }} size="lg">
                                    <IconKeyboard size={30} stroke={1.5} />
                                </ThemeIcon>
                                <Title className={classes.title}>HolyBoards</Title>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={{ base: 1.5, md: 4 }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <ThemeChanger />
                        </Grid.Col>
                    </Grid>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar className={classes.sidebar} py="md" px={4}>
                <NavbarLinksGroup />
            </AppShell.Navbar>

            <AppShell.Main className={classes.main}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}

export default MobileNavbar