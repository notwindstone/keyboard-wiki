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
                briefImage="https://www.keebtalk.com/uploads/db8059/original/2X/f/f4196118df9973356d923047339dc5c10d5d6177.jpeg"
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