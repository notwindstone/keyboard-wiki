import {ScrollArea} from '@mantine/core';
import LinksGroup from "../LinksGroup/LinksGroup.tsx";
import articles from '../../configs/articles.json'
import navigationLinks from '../../configs/navigationLinks.json'

const NavbarLinksGroup = () => {
    const tableOfContent = navigationLinks.concat(articles)

    const linksGroups = tableOfContent.map((paragraph) => {
        return (
            <LinksGroup {...paragraph} />
        )
    })

    return (
        <ScrollArea mih={220}>
            {linksGroups}
        </ScrollArea>
    );
}

export default NavbarLinksGroup