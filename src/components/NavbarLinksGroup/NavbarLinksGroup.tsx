import { ScrollArea } from '@mantine/core';
import LinksGroup from "../LinksGroup/LinksGroup.tsx";
import articles from '../../configs/articles.json'

const NavbarLinksGroup = () => {
    const linksGroups = articles.map((article) => {
        return (
            <LinksGroup {...article} />
        )
    })

    return (
        <ScrollArea mih={220}>
            {linksGroups}
        </ScrollArea>
    );
}

export default NavbarLinksGroup