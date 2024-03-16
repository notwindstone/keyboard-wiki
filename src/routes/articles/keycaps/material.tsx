import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import MaterialPost from "../../../content/keycaps/material.md";

const KeycapsMaterial = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Гайд",
        "previousPage": "Профили",
        "linkToNextPage": "/articles",
        "linkToPreviousPage": "/articles/keycaps/profiles"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Материалы"
                briefImage="https://cdn.shopify.com/s/files/1/0557/8961/7291/files/p1_b0153594-e778-4429-bb08-adc0abb5570e.jpg?v=1705392591"
                briefText={briefText}
                pages={pages}
            >
                <MaterialPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/keycaps/material')({
    component: KeycapsMaterial
})