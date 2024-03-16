import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import ModificationsPost from '../../../content/switches/modifications.md'

const SwitchModifications = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Франкенсвитчи",
        "previousPage": "Звук",
        "linkToNextPage": "/articles/switches/frankenswitches",
        "linkToPreviousPage": "/articles/switches/sound"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Модификация"
                briefImage="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/213300113/original/f178cc7fe3f78953dfec0060e250ebee9cd978f2/lube-your-mechanical-switches.png"
                briefText={briefText}
                pages={pages}
            >
                <ModificationsPost />
        </ArticleContent>
</MobileNavbar>
)
}

export const Route = createFileRoute('/articles/switches/modifications')({
    component: SwitchModifications
})