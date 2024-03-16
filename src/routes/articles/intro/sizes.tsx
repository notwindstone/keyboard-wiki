import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import SizesPost from "../../../content/intro/sizes.md";

const IntroSizes = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Раскладки",
        "previousPage": "Гайд",
        "linkToNextPage": "/articles/intro/layouts",
        "linkToPreviousPage": "/articles"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Размеры"
                briefImage="https://i.imgur.com/PNiV9R6.jpg"
                briefText={briefText}
                pages={pages}
            >
                <SizesPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/intro/sizes')({
    component: IntroSizes
})