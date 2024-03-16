import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import PlatesPost from "../../../content/kits/plates.md";

const KitsPlates = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Маунты",
        "previousPage": "Гайд",
        "linkToNextPage": "/articles/kits/mounts",
        "linkToPreviousPage": "/articles"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Плейты"
                briefImage="https://www.laserboost.com/wp-content/uploads/2021/01/Shiny-Brass-and-Custom-Logo.jpg"
                briefText={briefText}
                pages={pages}
            >
                <PlatesPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/kits/plates')({
    component: KitsPlates
})