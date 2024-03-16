import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import AnatomyPost from "../../../content/switches/anatomy.md";

const SwitchAnatomy = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "",
        "previousPage": "",
        "linkToNextPage": "/",
        "linkToPreviousPage": "/"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title=""
                briefImage=""
                briefText={briefText}
                pages={pages}
            >
                <AnatomyPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/anatomy')({
    component: SwitchAnatomy
})