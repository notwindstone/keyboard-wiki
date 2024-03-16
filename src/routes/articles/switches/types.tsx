import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import TypesPost from '../../../content/switches/types.md'

const SwitchTypes = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Анатомия",
        "previousPage": "Гайд",
        "linkToNextPage": "/articles/switches/anatomy",
        "linkToPreviousPage": "/articles"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Виды"
                briefImage="https://keychron.in/wp-content/uploads/2021/06/pf-e4418b41-CherryMXSwitches-Edited.jpg"
                briefText={briefText}
                pages={pages}
            >
                <TypesPost />
        </ArticleContent>
</MobileNavbar>
)
}

export const Route = createFileRoute('/articles/switches/types')({
    component: SwitchTypes
})