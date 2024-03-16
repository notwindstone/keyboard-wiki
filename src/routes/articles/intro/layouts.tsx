import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import LayoutsPost from "../../../content/intro/layouts.md";

const IntroLayouts = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Гайд",
        "previousPage": "Размеры",
        "linkToNextPage": "/articles",
        "linkToPreviousPage": "/articles/intro/sizes"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Раскладки"
                briefImage="https://cdn.shopify.com/s/files/1/0634/3370/3645/files/ANSI_Layout.jpg?v=1676550732"
                briefText={briefText}
                pages={pages}
            >
                <LayoutsPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/intro/layouts')({
    component: IntroLayouts
})