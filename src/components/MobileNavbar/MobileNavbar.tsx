import {AppShell, Burger, Group, Title, UnstyledButton} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconKeyboard } from '@tabler/icons-react';
import classes from './MobileNavbar.module.css';
import ThemeChanger from "../ThemeChanger/ThemeChanger.tsx";

export function MobileNavbar({ children }: any) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header className={classes.header}>
                <Group h="100%" px="md" className={classes.header}>
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <Group>
                            <IconKeyboard size={30} stroke={1.5} />
                            <Title className={classes.title}>HolyBoards</Title>
                        </Group>
                        <Group gap={0} visibleFrom="sm">
                            <UnstyledButton className={classes.control}>Home</UnstyledButton>
                            <UnstyledButton className={classes.control}>Blog</UnstyledButton>
                            <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
                            <UnstyledButton className={classes.control}>Support</UnstyledButton>
                        </Group>
                        <ThemeChanger />
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar className={classes.sidebar} py="md" px={4}>
                <UnstyledButton className={classes.control}>Home</UnstyledButton>
                <UnstyledButton className={classes.control}>Blog</UnstyledButton>
                <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
                <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main className={classes.main}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}