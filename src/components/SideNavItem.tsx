import {Button, Stack} from "@mantine/core";
import {IconChevronDown, IconChevronRight} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";
import {useDisclosure} from "@mantine/hooks";


const SideNavItem = (props: { title: string, sections: any }) => {
    const { title, sections } = props
    const [hidden, { toggle }] = useDisclosure(true)

    const buttons = sections.map(({ paragraphName, link }) => {
        return (
            <Button component={Link} to={link} justify="flex-start" className="sidebar__link"
                    variant="default">{paragraphName}</Button>
        )
    })

    return (
        <>
            <Button
                leftSection={
                    hidden ? <IconChevronRight stroke={1.5}/> : <IconChevronDown stroke={1.5}/>
                }
                justify="flex-start"
                variant="default"
                className="sidebar__item sidebar__heading-button"
                onClick={toggle}
            >
                {title}
            </Button>
            <Stack
                className="sidebar__stack"
                bg="var(--mantine-color-body)"
                justify="flex-start"
                gap="0"
                display={
                    hidden ? "none" : "flex"
                }
            >
                {buttons}
            </Stack>
        </>
    )
}

export default SideNavItem