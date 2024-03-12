import { ScrollArea } from '@mantine/core';
import { IconCalendarStats } from '@tabler/icons-react';
import LinksGroup from "../LinksGroup/LinksGroup.tsx";

const mockdata = [
    {
        label: 'Главная',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    {
        label: 'Документация',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    {
        label: 'Документация',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    {
        label: 'Документация',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    {
        label: 'Документация',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
]

const NavbarLinksGroup = () => {
    return (
        <ScrollArea mih={220}>
            {mockdata.map((data) => {
                return (
                    <LinksGroup {...data} />
                )
            })}
        </ScrollArea>
    );
}

export default NavbarLinksGroup